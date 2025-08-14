'use client';
import { useEffect, useState } from 'react';

interface PomodoroTimerProps {
    workMinutes?: number;
    breakMinutes?: number;
    onBreakStart?: () => void;
}

export default function PomodoroTimer({ workMinutes = 25, breakMinutes = 5, onBreakStart }: PomodoroTimerProps) {
    const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
            timer = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev > 0) return prev - 1;
                    else {
                        const nextMode = !isBreak;
                        setIsBreak(nextMode);
                        setSecondsLeft(nextMode ? breakMinutes * 60 : workMinutes * 60);
                        if (nextMode && onBreakStart) onBreakStart();
                        return nextMode ? breakMinutes * 60 : workMinutes * 60;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, isBreak, workMinutes, breakMinutes, onBreakStart]);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    const progress = 1 - secondsLeft / (isBreak ? breakMinutes * 60 : workMinutes * 60);

    return (
        <div
            className='flex flex-col items-center z-10 p-4 sm:p-6 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.6)]
             bg-gradient-to-br from-green-900 to-green-800 w-11/12 sm:w-3/4 md:w-2/3 lg:w-[40%] opacity-80 max-w-sm mx-auto'
        >
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 text-center transition-colors duration-500'>
                {isBreak ? 'Break' : 'Focus'} Time
            </h1>

            {/* Circular progress */}
            <div className='relative w-36 h-36 sm:w-40 sm:h-40 mb-4'>
                <svg className='absolute inset-0 w-full h-full' viewBox='0 0 100 100'>
                    <circle cx='50' cy='50' r='45' stroke='rgba(255,255,255,0.1)' strokeWidth='10' fill='none' />
                    <circle
                        cx='50'
                        cy='50'
                        r='45'
                        stroke={isBreak ? '#34d399' : '#10b981'}
                        strokeWidth='10'
                        fill='none'
                        strokeDasharray={2 * Math.PI * 45}
                        strokeDashoffset={(1 - progress) * 2 * Math.PI * 45}
                        strokeLinecap='round'
                        className='transition-all duration-500 ease-in-out'
                    />
                </svg>
                <div className='absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-mono text-white'>
                    {minutes}:{seconds.toString().padStart(2, '0')}
                </div>
            </div>

            {/* Controls */}
            <div className='flex flex-wrap justify-center gap-2 sm:gap-3 mt-2 w-full'>
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className='flex-1 px-3 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 text-sm sm:text-base'
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button
                    onClick={() => {
                        setIsRunning(false);
                        setIsBreak(false);
                        setSecondsLeft(workMinutes * 60);
                    }}
                    className='flex-1 px-3 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 text-sm sm:text-base'
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
