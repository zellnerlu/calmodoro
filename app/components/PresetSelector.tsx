import { presets } from '../constants';
import { Preset } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type Props = {
    onSelectPreset: (preset: Preset) => void;
};

export default function PresetSelector({ onSelectPreset }: Props) {
    return (
        <div className='space-y-4'>
            {/* Title */}
            <h3 className='text-white font-semibold text-lg'>Get Inspired and Select a Preset</h3>

            {/* Carousel */}
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                orientation='horizontal'
                className='w-[80%] md:w-[85%] mx-auto'
            >
                <CarouselContent>
                    {presets.map((preset) => (
                        <CarouselItem key={preset.id} className='md:basis-1/5'>
                            <Card
                                className='bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/10 cursor-pointer hover:bg-white/20 transform transition-all flex flex-col justify-between h-30'
                                onClick={() => onSelectPreset(preset)}
                            >
                                <CardHeader className='text-center'>
                                    <CardTitle className='text-sm text-white'>{preset.title}</CardTitle>
                                </CardHeader>
                                <CardContent className='p-1'>
                                    <div
                                        className='w-full h-1 rounded mx-auto'
                                        style={{
                                            background: `linear-gradient(to right, rgba(100,150,250,0.3), rgba(100,250,150,0.3))`,
                                        }}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/10 cursor-pointer hover:bg-white/20 transition-colors' />
                <CarouselNext className='bg-white/5 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/10 cursor-pointer hover:bg-white/20 transition-colors' />
            </Carousel>
        </div>
    );
}
