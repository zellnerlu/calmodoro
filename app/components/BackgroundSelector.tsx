import React from 'react';

type BgItem = {
    id: string;
    title: string;
    text: string;
};

type BackgroundSelectorProps = {
    images: BgItem[];
    setBg: (id: string) => void;
};

export default function BackgroundSelector({ images, setBg }: BackgroundSelectorProps) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center justify-items-center'>
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
    );
}
