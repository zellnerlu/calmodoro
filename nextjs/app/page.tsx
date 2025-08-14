'use client';
import { useEffect, useState } from 'react';
import SoundPlayer from './components/SoundPlayer';
import MeditationBreather from './components/MeditationBreather';
import PomodoroTimer from './components/PomodoroTimer';
import Link from 'next/link';
import { images } from './constants';
import { useOverlayOpenStore } from './store/store';
import KoFiButton from './components/KoFiButton';
import Image from 'next/image';

export default function Home() {
    const [bg, setBg] = useState('beach');
    const { isOverlayOpen, toggleOverlayOpen } = useOverlayOpenStore();
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
    }, [isOverlayOpen, toggleOverlayOpen]);

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
            className='bg-no-repeat bg-center bg-fixed bg-cover h-screen overflow-hidden transition-all duration-500 ease-in-out'
        >
            {images.map((img) => (
                <Image
                    key={img.id}
                    src={`/images/backgrounds/${img.id}.jpg`}
                    alt={img.title}
                    fill
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
                      ${bg === img.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    priority
                />
            ))}
            {/* Blob trigger */}
            <div className='flex justify-center p-6'>
                <div
                    onClick={() => toggleOverlayOpen(!isOverlayOpen)}
                    className='
      relative flex items-center justify-center
      w-16 h-16 sm:w-20 sm:h-20
      rounded-full cursor-pointer z-[999]
      bg-gradient-to-tr from-orange-400 via-pink-500 to-yellow-400
      shadow-lg shadow-orange-500/40
      transition-transform duration-300 active:scale-95
      animate-pulse-slow hover:animate-none hover:scale-110
    '
                >
                    {/* Subtle inner glow */}
                    <span className='absolute inset-0 rounded-full border border-white/30 blur-[1px]'></span>
                </div>
            </div>

            <div className='bg-transparent flex flex-col items-center justify-center pt-24'>
                {showPomodoroTimer && <PomodoroTimer onBreakStart={() => console.log('Break started')} />}
                {showMeditation && <MeditationBreather />}
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-50 backdrop-blur-md bg-black/40 text-white overflow-y-auto
    transform transition-all duration-500 ease-in-out pt-16
    ${isOverlayOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
  `}
            >
                {/* Close button */}
                <button
                    className='absolute top-4 right-4 text-4xl font-bold text-white/80 hover:text-white transition-colors'
                    onClick={() => toggleOverlayOpen(false)}
                >
                    &times;
                </button>

                <div className='max-w-5xl mx-auto px-4 sm:px-8 py-8'>
                    <h2 className='text-3xl font-semibold mb-6'>🎨 Select Your Theme</h2>

                    {/* Background cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {images.map((bgItem) => (
                            <div
                                key={bgItem.id}
                                className='group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-1 hover:shadow-lg cursor-pointer'
                                onClick={() => setBg(bgItem.id)}
                            >
                                <img
                                    src={`/images/thumbnails/${bgItem.id}.jpg`}
                                    alt={bgItem.title}
                                    className='w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                                <div className='p-4'>
                                    <h5 className='font-bold'>{bgItem.title}</h5>
                                    <p className='text-sm text-white/70'>{bgItem.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='my-8 border-t border-white/10'></div>

                    <SoundPlayer />

                    <div className='my-8 border-t border-white/10'></div>

                    {/* Toggles */}
                    <div className='flex flex-wrap gap-2 justify-center text-sm'>
                        <button
                            className='
      px-4 py-1.5 rounded-full bg-white/5 border border-white/10
      hover:bg-white/10 transition-colors
    '
                            onClick={() =>
                                setShowPomodoroTimer((prev) => {
                                    if (!prev) {
                                        setShowMeditation(false);
                                    }
                                    return !prev;
                                })
                            }
                        >
                            {showPomodoroTimer ? 'Hide Pomodoro Timer' : 'Show Pomodoro Timer'}
                        </button>

                        <button
                            className='
      px-4 py-1.5 rounded-full bg-white/5 border border-white/10
      hover:bg-white/10 transition-colors
    '
                            onClick={() =>
                                setShowMeditation((prev) => {
                                    if (!prev) {
                                        setShowPomodoroTimer(false);
                                    }
                                    return !prev;
                                })
                            }
                        >
                            {showMeditation ? 'Hide Meditation Breather' : 'Show Meditation Breather'}
                        </button>
                    </div>

                    <hr className='my-4 border-white/10' />

                    {/* Fullscreen controls */}
                    <div className='flex flex-wrap gap-2 justify-center text-sm'>
                        <button
                            className='
      px-4 py-1.5 rounded-full bg-white/5 border border-white/10
      hover:bg-white/10 transition-colors
    '
                            onClick={openFullscreen}
                        >
                            Enjoy in Fullscreen Mode
                        </button>

                        <button
                            className='
      px-4 py-1.5 rounded-full bg-white/5 border border-white/10
      hover:bg-white/10 transition-colors
    '
                            onClick={closeFullscreen}
                        >
                            Close Fullscreen
                        </button>
                    </div>

                    <hr className='my-4 border-white/10' />

                    {/* Links */}
                    <div className='flex flex-wrap gap-2 justify-center text-sm'>
                        <Link
                            href='/attribution'
                            className='
      px-4 py-1.5 rounded-full bg-white/5 border border-white/10
      hover:bg-white/10 transition-colors
    '
                        >
                            Attribution
                        </Link>

                        <Link
                            href='/imprint'
                            className='
      px-4 py-1.5 rounded-full bg-white/5 border border-white/10
      hover:bg-white/10 transition-colors
    '
                        >
                            Impressum
                        </Link>

                        <Link
                            href='/privacy'
                            className='
      px-4 py-1.5 rounded-full bg-white/5 border border-white/10
      hover:bg-white/10 transition-colors
    '
                        >
                            Privacy
                        </Link>
                    </div>

                    <div className='mt-6 flex justify-center'>
                        <KoFiButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
