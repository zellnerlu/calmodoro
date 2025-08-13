import { useEffect, useState } from 'react';

export default function PomodoroTimer({ workMinutes = 1, breakMinutes = 5, onBreakStart }) {
    const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let timer;
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

    return (
        <div className='flex flex-col items-center gap-4 bg-gray-900 p-6 rounded-2xl shadow-xl'>
            <h1 className='text-3xl font-semibold text-white'>{isBreak ? 'Break' : 'Focus'} Time</h1>
            <div className='text-6xl font-mono text-green-300'>
                {minutes}:{seconds.toString().padStart(2, '0')}
            </div>
            <div className='flex gap-4 mt-4'>
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className='px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 text-white'
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button
                    onClick={() => {
                        setIsRunning(false);
                        setIsBreak(false);
                        setSecondsLeft(workMinutes * 60);
                    }}
                    className='px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 text-white'
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
