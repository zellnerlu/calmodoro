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
            mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-european-forest-ambience-1213.mp3',
        },
        owl: { title: 'Owl in a forest', mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-owl-in-a-forest-2466.mp3' },
        rain: { title: 'Rain', mp3: 'https://assets.mixkit.co/sfx/preview/mixkit-long-rain-ambience-1247.mp3' },
    },
    topping: {
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
