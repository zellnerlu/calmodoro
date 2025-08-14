// Type definitions
type Sound = {
    title: string;
    mp3: string;
};

type CategorySounds = Record<string, Sound>;
type Bib = Record<string, CategorySounds>;

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
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1213/1213-preview.mp3',
        },
        owl: { title: 'Owl in a forest', mp3: 'https://assets.mixkit.co/active_storage/sfx/2466/2466-preview.mp3' },
        rain: { title: 'Rain and Thunder', mp3: 'https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3' },
        rain_on_umbrella: {
            title: 'Rain on an Umbrella',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1263/1263-preview.mp3',
        },
    },
    topping: {
        keyboardtyping: {
            title: 'Keyboard Typing',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/2537/2537-preview.mp3',
        },
        pageturning: {
            title: 'Page Turning',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1097/1097-preview.mp3',
        },
    },
};
