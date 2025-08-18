import { create } from 'zustand';

interface NavbarState {
  isVisible: boolean;
  lastScrollY: number;
  setVisibility: (visible: boolean) => void;
  setLastScrollY: (scrollY: number) => void;
  handleScroll: () => void;
}

export const useNavbarStore = create<NavbarState>((set, get) => ({
  isVisible: true,
  lastScrollY: 0,
  setVisibility: (visible: boolean) => set({ isVisible: visible }),
  setLastScrollY: (scrollY: number) => set({ lastScrollY: scrollY }),
  handleScroll: () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      const { lastScrollY } = get();
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        set({ isVisible: false, lastScrollY: currentScrollY });
      } else {
        set({ isVisible: true, lastScrollY: currentScrollY });
      }
    }
  },
}));