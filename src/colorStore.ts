import { create } from 'zustand';

interface ColorStore {
  colorState: ColorGroup[];
  setColors: (colors: ColorGroup[]) => void;
  addColorGroup: () => void;
  addColorToGroup: (groupName: string) => void;
  theme: 'dark' | 'light';
  setTheme: (setting: 'dark' | 'light') => void;
}

const defaultColors: Color[] = [
  { hue: '166', saturation: '56%', lightness: '71%' },
  { hue: '126', saturation: '59%', lightness: '51%' },
  { hue: '72', saturation: '54%', lightness: '68%' },
  { hue: '239', saturation: '65%', lightness: '53%' },
  { hue: '33', saturation: '46%', lightness: '61%' },
];

const useColorStore = create<ColorStore>((set) => ({
  colorState: [{ groupName: 'Color Group 1', colors: defaultColors }],
  setColors: (colorState) => set(() => ({ colorState: colorState })),
  addColorGroup: () =>
    set((state) => ({
      colorState: [
        ...state.colorState,
        {
          groupName: `Color Group ${state.colorState.length + 1}`,
          colors: defaultColors,
        },
      ],
    })),
  addColorToGroup: (groupName) =>
    set((state) => ({
      colorState: state.colorState.map((colorGroup) =>
        colorGroup.groupName === groupName
          ? {
              ...colorGroup,
              colors: [
                ...colorGroup.colors,
                colorGroup.colors[colorGroup.colors.length - 1],
              ],
            }
          : colorGroup
      ),
    })),
  theme: 'dark',
  setTheme: (setting) => set(() => ({ theme: setting })),
}));

export { useColorStore };
