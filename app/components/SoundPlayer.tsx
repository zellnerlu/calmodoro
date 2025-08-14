'use client';

import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { bib } from '../constants';

type SelectionState = Record<string, string>;
type VolumeState = Record<string, number>;

export default function SoundPlayer() {
    const [selection, setSelection] = useState<SelectionState>({
        ambient: '',
        nature: '',
        topping: '',
    });

    const [volume, setVolume] = useState<VolumeState>({
        ambient: 0.5,
        nature: 0.5,
        topping: 0.5,
    });

    const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({
        ambient: null,
        nature: null,
        topping: null,
    });

    const updateAudio = (cat: string, key: string) => {
        // Stop previous audio if any
        if (audioRefs.current[cat]) {
            audioRefs.current[cat]?.pause();
            audioRefs.current[cat] = null;
        }

        if (!key) return;

        const sound = bib[cat][key];
        const audio = new Audio(sound.mp3);
        audio.loop = true;
        audio.volume = volume[cat];
        audio.play();
        audioRefs.current[cat] = audio;
    };

    // Update audio whenever selection changes
    useEffect(() => {
        Object.entries(selection).forEach(([cat, key]) => updateAudio(cat, key));
    }, [selection]);

    // Update volume whenever changed
    useEffect(() => {
        Object.entries(volume).forEach(([cat, vol]) => {
            if (audioRefs.current[cat]) audioRefs.current[cat]!.volume = vol;
        });
    }, [volume]);

    const handleSelectChange = (cat: string, e: ChangeEvent<HTMLSelectElement>) => {
        setSelection({ ...selection, [cat]: e.target.value });
    };

    const handleVolumeChange = (cat: string, e: ChangeEvent<HTMLInputElement>) => {
        setVolume({ ...volume, [cat]: parseFloat(e.target.value) });
    };

    return (
        <div className='space-y-8'>
            {Object.keys(bib).map((cat) => (
                <div key={cat} className='bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/10'>
                    {/* Category Heading */}
                    <h2 className='font-semibold text-lg mb-4 text-white tracking-wide'>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </h2>

                    {/* Select & Range Controls */}
                    <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0'>
                        {/* Styled Select */}
                        <select
                            value={selection[cat]}
                            onChange={(e) => handleSelectChange(cat, e)}
                            className='
            flex-1 rounded-lg px-3 py-2 text-sm text-white
            bg-gradient-to-tr from-orange-400 via-pink-500 to-yellow-400
            focus:outline-none focus:ring-2 focus:ring-orange-300
            cursor-pointer transition-transform hover:scale-101 opacity-80
          '
                        >
                            <option value='' className='text-gray-700'>
                                Select...
                            </option>
                            {Object.entries(bib[cat]).map(([key, sound]) => (
                                <option key={key} value={key} className='text-gray-800'>
                                    {sound.title}
                                </option>
                            ))}
                        </select>

                        {/* Volume Slider */}
                        <div className='flex items-center space-x-2 w-full sm:w-100'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-5 h-5 text-white/80'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M11 5l-7 7 7 7V5z'
                                />
                            </svg>

                            <input
                                type='range'
                                min='0'
                                max='1'
                                step='0.01'
                                value={volume[cat]}
                                onChange={(e) => handleVolumeChange(cat, e)}
                                className='
              flex-1 accent-orange-400 cursor-pointer
              hover:accent-pink-500 focus:accent-yellow-400
              transition-all
            '
                            />

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-5 h-5 text-white/80'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M15 5v14l7-7-7-7z'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
