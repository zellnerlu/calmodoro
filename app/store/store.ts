import { create } from 'zustand';

interface OverlayOpenState {
    isOverlayOpen: boolean;
    toggleOverlayOpen: (open: boolean) => void;
}

export const useOverlayOpenStore = create<OverlayOpenState>((set) => ({
    isOverlayOpen: false,
    toggleOverlayOpen: (open) => set({ isOverlayOpen: open }),
}));
