import { useEffect, useState } from 'react';

export default function MeditationBreather({ inTime = 4000, outTime = 4000 }) {
    const [breathingIn, setBreathingIn] = useState(true);

    useEffect(() => {
        const timer = setInterval(
            () => {
                setBreathingIn((prev) => !prev);
            },
            breathingIn ? inTime : outTime
        );

        return () => clearInterval(timer);
    }, [breathingIn, inTime, outTime]);

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <div
                className={`w-40 h-40 rounded-full transition-all duration-[${
                    breathingIn ? inTime : outTime
                }ms] ease-in-out`}
                style={{
                    transform: breathingIn ? 'scale(1.2)' : 'scale(1)',
                    background: 'radial-gradient(circle, rgb(163, 248, 194) 0%, rgba(16,185,129,1) 100%)',
                }}
            />
            <p className='mt-6 text-2xl font-light text-gray-100'>{breathingIn ? 'Breathe in...' : 'Breathe out...'}</p>
        </div>
    );
}
