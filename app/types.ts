// Type definitions
type Sound = {
    title: string;
    mp3: string;
    attribution: string;
};

type CategorySounds = Record<string, Sound>;
export type Bib = Record<string, CategorySounds>;
export type SelectionState = Record<string, string>;
export type VolumeState = Record<string, number>;
export type Preset = {
    id: string;
    title: string;
    description?: string;
    bg: string;
    selection: SelectionState;
    volume: VolumeState;
};
