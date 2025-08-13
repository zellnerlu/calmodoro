'use client';

import { useState, useRef, useEffect, ChangeEvent } from 'react';

// Type definitions
type Sound = {
    title: string;
    mp3: string;
};

type CategorySounds = Record<string, Sound>;
type Bib = Record<string, CategorySounds>;

export const bib: Bib = {
    ambient: {
        motivation: {
            title: 'Motivation',
            mp3: 'https://cdn.pixabay.com/download/audio/2021/11/26/audio_e20882e29d.mp3?filename=acoustic-motivation-11290.mp3',
        },
        piano: {
            title: 'Piano',
            mp3: 'https://cdn.pixabay.com/audio/2021/10/25/audio_05570f2464.mp3',
        },
        meditation: {
            title: 'Meditation',
            mp3: 'https://cdn.pixabay.com/audio/2021/08/14/audio_ffd25fe177.mp3',
        },
    },
    nature: {
        birds: {
            title: 'European Forest Birds',
            mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-european-forest-ambience-1213.mp3',
        },
        owl: { title: 'Owl in a forest', mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-owl-in-a-forest-2466.mp3' },
        rain: { title: 'Rain', mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-long-rain-ambience-1247.mp3' },
    },
    asmr: {
        keyboardtyping: {
            title: 'Keyboard Typing',
            mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-laptop-keyboard-typing-sequence-2537.mp3',
        },
        pageturning: {
            title: 'Page Turning',
            mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-turning-the-newspaper-big-page-1097.mp3',
        },
    },
};

type SelectionState = Record<string, string>;
type VolumeState = Record<string, number>;

export default function SoundPlayer() {
    const [selection, setSelection] = useState<SelectionState>({
        ambient: '',
        nature: '',
        asmr: '',
    });

    const [volume, setVolume] = useState<VolumeState>({
        ambient: 0.5,
        nature: 0.5,
        asmr: 0.5,
    });

    const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({
        ambient: null,
        nature: null,
        asmr: null,
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
        <div className='space-y-6'>
            {Object.keys(bib).map((cat) => (
                <div key={cat}>
                    <h2 className='font-bold text-lg mb-2'>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>

                    <select
                        value={selection[cat]}
                        onChange={(e) => handleSelectChange(cat, e)}
                        className='border rounded p-1 mr-4'
                    >
                        <option value=''>Select...</option>
                        {Object.entries(bib[cat]).map(([key, sound]) => (
                            <option key={key} value={key}>
                                {sound.title}
                            </option>
                        ))}
                    </select>

                    <input
                        type='range'
                        min='0'
                        max='1'
                        step='0.01'
                        value={volume[cat]}
                        onChange={(e) => handleVolumeChange(cat, e)}
                        className='align-middle'
                    />
                </div>
            ))}
        </div>
    );
}
