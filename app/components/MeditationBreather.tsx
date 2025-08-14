'use client';
import { useState, useEffect } from 'react';

interface MeditationBreatherProps {
    inTime?: number; // ms for inhale
    outTime?: number; // ms for exhale
}

export default function MeditationBreather({ inTime = 4000, outTime = 6000 }: MeditationBreatherProps) {
    const [breathingIn, setBreathingIn] = useState(true);

    useEffect(() => {
        const duration = breathingIn ? inTime : outTime;
        const timer = setTimeout(() => setBreathingIn(!breathingIn), duration);
        return () => clearTimeout(timer);
    }, [breathingIn, inTime, outTime]);

    return (
        <div className='flex flex-col items-center justify-center h-full z-10 px-4'>
            {/* Breathing Circle */}
            <div
                className={`rounded-full transition-all ease-in-out`}
                style={{
                    width: 'min(60vw, 240px)',
                    height: 'min(60vw, 240px)',
                    transform: breathingIn ? 'scale(1.3)' : 'scale(1)',
                    background: 'radial-gradient(circle, rgb(163, 248, 194) 0%, rgba(16,185,129,1) 100%)',
                    boxShadow: `0 0 ${
                        breathingIn ? '40px' : '20px'
                    } rgba(16,185,129,0.6), inset 0 0 20px rgba(163,248,194,0.5)`,
                    transitionDuration: `${breathingIn ? inTime : outTime}ms`,
                }}
            />

            {/* Instruction Text */}
            <p
                className={`flex items-center justify-center mt-16 text-xl sm:text-2xl font-light text-gray-100 bg-gray-900/50 w-[256px] px-4 py-2 rounded-lg transition-all duration-700 ease-in-out`}
                style={
                    {
                        // opacity: breathingIn ? 1 : 0.8,
                        // transform: breathingIn ? 'scale(1.05)' : 'scale(1)',
                    }
                }
            >
                Breathe in and out...
            </p>
        </div>
    );
}
