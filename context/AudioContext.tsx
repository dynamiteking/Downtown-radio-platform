'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Track } from '../types';
import { INITIAL_TRACKS } from '../data/mockData';

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  analyserData: number[];
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  seekTo: (seconds: number) => void;
  setVolumeLevel: (volume: number) => void;
  toggleMute: () => void;
  playNext: () => void;
  playPrevious: () => void;
  trackList: Track[];
  setTrackList: React.Dispatch<React.SetStateAction<Track[]>>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [trackList, setTrackList] = useState<Track[]>(INITIAL_TRACKS);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(INITIAL_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(INITIAL_TRACKS[0].duration);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [analyserData, setAnalyserData] = useState<number[]>([15, 30, 60, 45, 80, 50, 70, 35, 90, 40, 65, 20]);

  // Web Audio Synth references
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const stepIntervalRef = useRef<any>(null);
  const animFrameRef = useRef<any>(null);
  const timeProgressRef = useRef<any>(null);
  const audioElRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio Element for real MP3 playback
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const el = new Audio();
      el.preload = 'auto';
      el.volume = volume;

      el.ontimeupdate = () => {
        setCurrentTime(Math.floor(el.currentTime));
      };

      el.onloadedmetadata = () => {
        if (el.duration && !isNaN(el.duration)) {
          setDuration(Math.floor(el.duration));
        }
      };

      el.onended = () => {
        playNext();
      };

      audioElRef.current = el;
    }

    return () => {
      if (audioElRef.current) {
        audioElRef.current.pause();
        audioElRef.current.src = '';
      }
    };
  }, []);

  // Initialize Web Audio Engine
  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        const ctx = new AudioContextClass();
        const masterGain = ctx.createGain();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64;

        masterGain.gain.setValueAtTime(volume, ctx.currentTime);
        masterGain.connect(analyser);
        analyser.connect(ctx.destination);

        audioCtxRef.current = ctx;
        masterGainRef.current = masterGain;
        analyserRef.current = analyser;
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Play a harmonic chime / chord pulse based on frequency
  const playSynthesizedTone = (freqs: number[], durationSec: number = 0.4, type: OscillatorType = 'sine') => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400 + idx * 400, ctx.currentTime);

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const startTime = ctx.currentTime;
      noteGain.gain.setValueAtTime(0.001, startTime);
      noteGain.gain.exponentialRampToValueAtTime(0.12 / freqs.length, startTime + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + durationSec);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(masterGainRef.current!);

      osc.start(startTime);
      osc.stop(startTime + durationSec + 0.05);
    });
  };

  // Rhythmic step sequencer that plays African alté chord progressions
  const startSequencer = (bpm: number = 112) => {
    stopSequencer();
    const intervalMs = (60 / bpm) * 500; // 8th note cadence
    let step = 0;

    // Chords: Dm7 -> G7 -> Cmaj7 -> Am7
    const chords = [
      [293.66, 349.23, 440.0, 523.25], // Dm7
      [293.66, 349.23, 440.0],
      [196.00, 246.94, 293.66, 392.00], // G7
      [196.00, 392.00],
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [261.63, 392.00],
      [220.00, 261.63, 329.63, 440.00], // Am7
      [220.00, 440.00],
    ];

    stepIntervalRef.current = setInterval(() => {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        const chord = chords[step % chords.length];
        const isBassStep = step % 2 === 0;
        
        // Tone
        playSynthesizedTone(chord, 0.45, isBassStep ? 'triangle' : 'sine');
        
        // Subtle rhythm snap on 2 and 4
        if (step % 4 === 2) {
          playSynthesizedTone([780, 1200], 0.08, 'triangle');
        }
        step++;
      }
    }, intervalMs);

    // Spectrum visualizer loop
    const updateSpectrum = () => {
      if (analyserRef.current) {
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyserRef.current.getByteFrequencyData(dataArray);
        
        // Take 12 representative bars
        const stepSize = Math.floor(bufferLength / 12);
        const sampled = Array.from({ length: 12 }, (_, i) => {
          const val = dataArray[i * stepSize] || 10;
          return Math.max(12, Math.min(100, Math.round((val / 255) * 100)));
        });
        setAnalyserData(sampled);
      }
      animFrameRef.current = requestAnimationFrame(updateSpectrum);
    };
    animFrameRef.current = requestAnimationFrame(updateSpectrum);
  };

  const startSpectrumSimulation = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    let frame = 0;
    const animate = () => {
      frame++;
      if (frame % 4 === 0) {
        setAnalyserData([
          Math.floor(25 + Math.random() * 55),
          Math.floor(40 + Math.random() * 50),
          Math.floor(60 + Math.random() * 35),
          Math.floor(35 + Math.random() * 60),
          Math.floor(70 + Math.random() * 30),
          Math.floor(45 + Math.random() * 50),
          Math.floor(80 + Math.random() * 20),
          Math.floor(30 + Math.random() * 65),
          Math.floor(65 + Math.random() * 35),
          Math.floor(40 + Math.random() * 55),
          Math.floor(55 + Math.random() * 40),
          Math.floor(20 + Math.random() * 50),
        ]);
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
  };

  const stopSequencer = () => {
    if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  const playTrack = (track: Track) => {
    initAudio();
    setCurrentTrack(track);
    setDuration(track.duration);
    setCurrentTime(0);
    setIsPlaying(true);

    if (track.audioUrl) {
      stopSequencer();
      if (audioElRef.current) {
        audioElRef.current.src = track.audioUrl;
        audioElRef.current.currentTime = 0;
        audioElRef.current.volume = isMuted ? 0 : volume;
        audioElRef.current.play().catch(e => {
          console.warn('Real audio playback error / fallback to synth:', e);
          startSequencer(track.bpm || 114);
        });
      }
      startSpectrumSimulation();
    } else {
      if (audioElRef.current) {
        audioElRef.current.pause();
      }
      startSequencer(track.bpm || 114);
    }
  };

  const togglePlay = () => {
    initAudio();
    if (!currentTrack && trackList.length > 0) {
      playTrack(trackList[0]);
      return;
    }

    if (isPlaying) {
      setIsPlaying(false);
      if (audioElRef.current) audioElRef.current.pause();
      stopSequencer();
    } else {
      setIsPlaying(true);
      if (currentTrack?.audioUrl && audioElRef.current) {
        audioElRef.current.play().catch(() => {
          startSequencer(currentTrack?.bpm || 114);
        });
        startSpectrumSimulation();
      } else {
        startSequencer(currentTrack?.bpm || 114);
      }
    }
  };

  const seekTo = (seconds: number) => {
    const target = Math.max(0, Math.min(seconds, duration));
    setCurrentTime(target);
    if (audioElRef.current && currentTrack?.audioUrl) {
      audioElRef.current.currentTime = target;
    }
  };

  const setVolumeLevel = (newVol: number) => {
    setVolume(newVol);
    if (audioElRef.current) {
      audioElRef.current.volume = isMuted ? 0 : newVol;
    }
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(isMuted ? 0 : newVol, audioCtxRef.current.currentTime);
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioElRef.current) {
      audioElRef.current.volume = nextMuted ? 0 : volume;
    }
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(nextMuted ? 0 : volume, audioCtxRef.current.currentTime);
    }
  };

  const playNext = () => {
    if (!currentTrack) return;
    const currentIndex = trackList.findIndex(t => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % trackList.length;
    playTrack(trackList[nextIndex]);
  };

  const playPrevious = () => {
    if (!currentTrack) return;
    const currentIndex = trackList.findIndex(t => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + trackList.length) % trackList.length;
    playTrack(trackList[prevIndex]);
  };

  // Clock progression for synthetic tracks
  useEffect(() => {
    if (isPlaying && !currentTrack?.audioUrl) {
      timeProgressRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            playNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timeProgressRef.current) clearInterval(timeProgressRef.current);
    }
    return () => {
      if (timeProgressRef.current) clearInterval(timeProgressRef.current);
    };
  }, [isPlaying, duration, currentTrack?.audioUrl]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSequencer();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        analyserData,
        playTrack,
        togglePlay,
        seekTo,
        setVolumeLevel,
        toggleMute,
        playNext,
        playPrevious,
        trackList,
        setTrackList,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
