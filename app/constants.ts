import { Bib, Preset } from './types';

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
    {
        id: 'cottage',
        title: 'Cozy Cottage',
        text: 'Calm down in a cozy cottage.',
        attribution:
            'Photo by <a href="https://unsplash.com/@claybanks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clay Banks</a> on <a href="https://unsplash.com/photos/a-living-room-with-a-wood-burning-stove-in-it-kNFOoORtrys?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
        id: 'cafe',
        title: 'Calming Café',
        text: 'Drink a cup of coffee in a calming café.',
        attribution:
            'Photo by <a href="https://unsplash.com/@pinchebesu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ruben Ramirez</a> on <a href="https://unsplash.com/photos/brown-wooden-table-and-chairs-xhKG01FN2uk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    },
    {
        id: 'library',
        title: 'Library',
        text: 'Reduce stress while reading a book.',
        attribution:
            'Photo by <a href="https://unsplash.com/@jonathan_francisca?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan Francisca</a> on <a href="https://unsplash.com/photos/brown-and-blue-desk-globe-in-library-BpbkLACP64M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
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
        keyboard_typing: {
            title: 'Keyboard Typing',
            mp3: 'https://assets.mixkit.co/active_storage/sfx/2537/2537-preview.mp3',
            attribution: 'mixkit.co',
        },
        page_turning: {
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

export const presets: Preset[] = [
    {
        id: 'forest',
        title: 'Forest Chill',
        bg: 'forest',
        selection: { ambient: 'piano', nature: '', topping: 'walking_on_leaves' },
        volume: { ambient: 0.1, nature: 0.0, topping: 0.3 },
    },
    {
        id: 'morning_meditation',
        title: 'Morning Meditation',
        bg: 'sky',
        selection: { ambient: 'meditation', nature: 'birds', topping: '' },
        volume: { ambient: 0.3, nature: 0.2, topping: 0 },
        // Could add a soft bell or chime here for nicer meditation start
    },
    {
        id: 'rainy_night',
        title: 'Rainy Night',
        bg: 'river',
        selection: { ambient: 'motivation', nature: 'rain', topping: 'keyboard_typing' },
        volume: { ambient: 0.2, nature: 0.5, topping: 0.1 },
        // Could add thunder cracks for more realism
    },
    {
        id: 'woodland_walk',
        title: 'Woodland Walk',
        bg: 'forest',
        selection: { ambient: 'piano', nature: 'owl', topping: 'walking_on_leaves' },
        volume: { ambient: 0.2, nature: 0.2, topping: 0.3 },
        // Could add wind rustling sounds
    },
    {
        id: 'seaside_relax',
        title: 'Seaside Relax',
        bg: 'beach',
        selection: { ambient: '', nature: 'sea_waves', topping: 'page_turning' },
        volume: { ambient: 0.5, nature: 0.3, topping: 0.1 },
        // Could add distant seagull calls for extra flavor
    },
    {
        id: 'library_focus',
        title: 'Library Focus',
        bg: 'library',
        selection: { ambient: 'piano', nature: '', topping: 'page_turning' },
        volume: { ambient: 0.3, nature: 0, topping: 0.2 },
        // Could add soft murmurs for realism
    },
    {
        id: 'stormy_evening',
        title: 'Stormy Evening',
        bg: 'cottage',
        selection: { ambient: 'motivation', nature: 'rain_on_umbrella', topping: '' },
        volume: { ambient: 0.2, nature: 0.5, topping: 0.3 },
        // Could add distant thunder for intensity
    },
    {
        id: 'quiet_river',
        title: 'Quiet River',
        bg: 'river',
        selection: { ambient: 'meditation', nature: 'sea_waves', topping: 'wooden_ship_on_water' },
        volume: { ambient: 0.2, nature: 0.2, topping: 0.2 },
        // Adding frogs/cicadas could make it more natural
    },
    {
        id: 'morning_breeze',
        title: 'Morning Breeze',
        bg: 'forest',
        selection: { ambient: 'piano', nature: 'birds', topping: 'wave_splashing' },
        volume: { ambient: 0.2, nature: 0.3, topping: 0.1 },
        // Could add wind through trees for extra ambiance
    },
    {
        id: 'cozy_cafe',
        title: 'Cozy Café',
        bg: 'cafe',
        selection: { ambient: 'motivation', nature: '', topping: 'keyboard_typing' },
        volume: { ambient: 0.2, nature: 0, topping: 0.3 },
        // Adding coffee machine sounds or light chatter could improve the vibe
    },
    {
        id: 'ocean_dream',
        title: 'Ocean Dream',
        bg: 'beach',
        selection: { ambient: '', nature: 'rain', topping: 'wave_splashing' },
        volume: { ambient: 0.4, nature: 0.2, topping: 0.2 },
        // Could add distant boat horns or gulls for depth
    },
];
