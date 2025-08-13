'use client';
import { useEffect, useState } from 'react';
import SoundPlayer from './components/SoundPlayer';
import MeditationBreather from './components/MeditationBreather';
import PomodoroTimer from './components/PomodoroTimer';
import Link from 'next/link';

export const images = [
    {
        id: 'beach',
        title: 'Holiday at the Beach',
        text: 'Give yourself a little rest with some beach vibes.',
    },
    { id: 'forest', title: 'Woodland', text: 'Calm down in an ambient of woodland and moss.' },
    { id: 'sky', title: 'Sky', text: 'Slow down by having a glance at the sky.' },
    { id: 'river', title: 'River', text: 'Enjoy the appearance and calmness of water.' },
];

export default function Home() {
    const [bg, setBg] = useState('beach');
    const [isOverlayOpen, toggleOverlayOpen] = useState(false);
    const [showMeditation, setShowMeditation] = useState(false);
    const [showPomodoroTimer, setShowPomodoroTimer] = useState(false);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                toggleOverlayOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [isOverlayOpen]);

    const openFullscreen = () => {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    };

    const closeFullscreen = () => {
        if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    return (
        <div
            id='main-bg'
            className='bg-no-repeat bg-center bg-fixed bg-cover h-screen overflow-hidden'
            style={{ backgroundImage: `url(/images/backgrounds/${bg}.jpg)` }}
        >
            {/* Blob trigger */}
            <div className='flex justify-center p-6'>
                <div
                    onClick={() => toggleOverlayOpen((isOverlayOpen) => !isOverlayOpen)}
                    className='class="
                        bg-white rounded-[60%] relative border-[3px] border-[rgba(255,100,0,0.8)]
                        h-[50px] w-[50px] mx-auto block
                        shadow-[0_0_0_0_rgba(255,165,0,1)]
                        scale-100 cursor-pointer z-[999]
                        animate-blobPulse
                    "'
                ></div>
            </div>

            <div className='bg-transparent flex flex-col items-center justify-center pt-24'>
                {showPomodoroTimer && <PomodoroTimer onBreakStart={() => setShowMeditation(true)} />}
                {showMeditation && <MeditationBreather />}
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 bg-opacity-80 text-white overflow-y-auto p-6 pt-24
                    transition-opacity duration-500 ease-in-out
                    ${isOverlayOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <button
                    className='absolute top-4 right-4 text-3xl cursor-pointer'
                    onClick={() => toggleOverlayOpen(false)}
                >
                    &times;
                </button>

                <h2 className='text-2xl mb-4'>Select your theme</h2>

                {/* Background cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {images.map((bgItem) => (
                        <div
                            key={bgItem.id}
                            className='bg-gray-800 rounded-lg overflow-hidden cursor-pointer active:scale-95 active:shadow-[3px_2px_22px_1px_rgba(0,0,0,0.24)]'
                            onClick={() => setBg(bgItem.id)}
                        >
                            <img
                                src={`/images/thumbnails/${bgItem.id}.jpg`}
                                alt={bgItem.title}
                                className='w-full h-32 object-cover'
                            />
                            <div className='p-4'>
                                <h5 className='font-bold'>{bgItem.title}</h5>
                                <p className='text-sm'>{bgItem.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className='my-6 border-gray-600' />

                <SoundPlayer />

                <hr className='my-6 border-gray-600' />

                <div className='flex justify-center space-x-4'>
                    <button
                        className='bg-gray-700 px-4 py-2 rounded cursor-pointer'
                        onClick={() => setShowPomodoroTimer((prev) => !prev)}
                    >
                        {showPomodoroTimer ? 'Hide Pomodoro Timer' : 'Show Pomodoro Timer'}
                    </button>
                    <button
                        className='bg-gray-700 px-4 py-2 rounded cursor-pointer'
                        onClick={() => setShowMeditation((prev) => !prev)}
                    >
                        {showMeditation ? 'Hide Meditation Breather' : 'Show Meditation Breather'}
                    </button>
                </div>

                <hr className='my-6 border-gray-600' />

                {/* Fullscreen buttons */}
                <div className='flex justify-center space-x-4'>
                    <button className='bg-gray-700 px-4 py-2 rounded cursor-pointer' onClick={openFullscreen}>
                        Enjoy in Fullscreen Mode
                    </button>
                    <button className='bg-gray-700 px-4 py-2 rounded cursor-pointer' onClick={closeFullscreen}>
                        Close Fullscreen
                    </button>
                </div>

                {/* Buttons to open modals */}
                <div className='flex gap-4'>
                    <Link href='/attribution' className='btn btn-primary'>
                        Attribution
                    </Link>
                    <Link href='/imprint' className='btn btn-primary'>
                        Impressum
                    </Link>
                    <Link href='/privacy' className='btn btn-primary'>
                        Privacy
                    </Link>
                </div>

                {/* Buy Me a Coffee */}
                <a
                    href='https://ko-fi.com/zellnerlu'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 inline-flex items-center px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition'
                >
                    ☕ Buy me a Coffee
                </a>
            </div>
        </div>
    );
}
