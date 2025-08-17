// Type definitions
type Sound = {
    title: string;
    mp3: string;
    attribution: string;
};

type CategorySounds = Record<string, Sound>;
type Bib = Record<string, CategorySounds>;

export const images = [
    {
        id: 'beach',
        title: 'Holiday at the Beach',
        text: 'Give yourself a little rest with some beach vibes.',
        attribution:
            'Photo by <a href="https://unsplash.com/@quinoal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Quino Al</a> on <a href="https://unsplash.com/images/nature/beach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> ',
    },
    {
        id: 'forest',
        title: 'Woodland',
        text: 'Calm down in an ambient of woodland and moss.',
        attribution:
            'Photo by <a href="https://unsplash.com/@sakulich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergej A</a> on <a href="https://unsplash.com/photos/-heLWtuAN3c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
        id: 'sky',
        title: 'Sky',
        text: 'Slow down by having a glance at the sky.',
        attribution:
            'Photo by <a href="https://unsplash.com/@akaunas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sasha Kaunas</a> on <a href="https://unsplash.com/photos/b_wN4QemTzU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> ',
    },
    {
        id: 'river',
        title: 'River',
        text: 'Enjoy the appearance and calmness of water.',
        attribution:
            'Photo by <a href="https://unsplash.com/@jdiegoph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diego PH</a> on <a href="https://unsplash.com/wallpapers/nature/sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> ',
    },
];

export const bib: Bib = {
    ambient: {
        motivation: {
            title: 'Motivation',
            mp3: 'https://cdn.pixabay.com/download/audio/2021/11/26/audio_e20882e29d.mp3?filename=acoustic-motivation-11290.mp3',
            attribution:
                'Music by <a href="https://pixabay.com/de/users/coma-media-24399569/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=11290">Coma-Media</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=11290">Pixabay</a>',
        },
        piano: {
            title: 'Piano',
            mp3: 'https://cdn.pixabay.com/audio/2021/10/25/audio_05570f2464.mp3',
            attribution:
                'Music by <a href="https://pixabay.com/de/users/daddy_s_music-22836301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=9835">Daddy_s_Music</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=9835">Pixabay</a>',
        },
        meditation: {
            title: 'Meditation',
            mp3: 'https://cdn.pixabay.com/audio/2021/08/14/audio_ffd25fe177.mp3',
            attribution:
                'Music by <a href="https://pixabay.com/de/users/natureseye-18615106/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=7359">NaturesEye</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=7359">Pixabay</a>',
        },
    },
    nature: {
        birds: {
            title: 'European Forest Birds',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1213/1213-preview.mp3',
            attribution: 'mixkit.co',
        },
        owl: {
            title: 'Owl in a forest',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/2466/2466-preview.mp3',
            attribution: 'mixkit.co',
        },
        rain: {
            title: 'Rain and Thunder',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3',
            attribution: 'mixkit.co',
        },
        rain_on_umbrella: {
            title: 'Rain on an Umbrella',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1263/1263-preview.mp3',
            attribution: 'mixkit.co',
        },
        sea_waves: {
            title: 'Sea Waves',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1189/1189-preview.mp3',
            attribution: 'mixkit.co',
        },
    },
    topping: {
        keyboardtyping: {
            title: 'Keyboard Typing',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/2537/2537-preview.mp3',
            attribution: 'mixkit.co',
        },
        pageturning: {
            title: 'Page Turning',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1097/1097-preview.mp3',
            attribution: 'mixkit.co',
        },
        wooden_ship_on_water: {
            title: 'Wooden Ship on Water',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/1187/1187-preview.mp3',
            attribution: 'mixkit.co',
        },
        wave_splashing: {
            title: 'Wave Splashing',
            mp3: 'https://cdn.freesound.org/previews/796/796671_7993693-lq.mp3',
            attribution: 'freesound.org',
        },
        walking_on_leaves: {
            title: 'Walking on Leaves',
            mp3: 'https://cdn.freesound.org/previews/765/765999_15695818-lq.mp3',
            attribution: 'freesound.org',
        },
    },
};
