import { create } from 'zustand';

type Color = {
  hue: 'string';
  saturation: 'string';
  lightness: 'string';
};

type ColorGroup = Color[];

interface ColorState {
  colors: ColorGroup[];
  setColors: (colors: ColorGroup[]) => void;
}

const useColorStore = create<ColorState>((set) => ({
  colors: [],
  setColors: (newColors) => set(() => ({ colors: newColors })),
}));

export { useColorStore };
