import { create } from 'zustand';
import * as O from 'optics-ts';

interface ColorStore {
  colorState: ColorGroup[];
  setColors: (colors: ColorGroup[]) => void;
  addColorGroup: () => void;
  modifyColorGroup: (groupName: string, newGroup: ColorGroup) => void;
  deleteColorGroup: (groupName: string) => void;
  addColorToGroup: (groupName: string, color: Color) => void;
  modifyColor: (groupName: string, colorName: string, newColor: Color) => void;
  deleteColor: (groupName: string, colorName: string) => void;
  theme: 'dark' | 'light';
  setTheme: (setting: 'dark' | 'light') => void;
}

const defaultColors: Color[] = [
  { hue: '166', saturation: '56%', lightness: '71%', colorName: '1' },
  { hue: '126', saturation: '59%', lightness: '51%', colorName: '2' },
  { hue: '72', saturation: '54%', lightness: '68%', colorName: '3' },
  { hue: '239', saturation: '65%', lightness: '53%', colorName: '4' },
  { hue: '33', saturation: '46%', lightness: '61%', colorName: '5' },
];

const useColorStore = create<ColorStore>((set) => ({
  colorState: [{ groupName: 'Color Group 1', colors: defaultColors }],
  setColors: (colorState) => set(() => ({ colorState: colorState })),
  addColorGroup: () => {
    set(
      O.modify(O.optic<ColorStore>().prop('colorState'))((colorState) =>
        colorState.concat({
          groupName: `Color Group ${colorState.length + 1}`,
          colors: defaultColors,
        })
      )
    );
  },
  modifyColorGroup: (groupName: string, newGroup) => {
    set(
      O.modify(
        O.optic<ColorStore>()
          .prop('colorState')
          .elems()
          .when((colorGroup) => colorGroup.groupName === groupName)
      )((colorGroup) => ({ ...colorGroup, groupName: newGroup.groupName }))
    );
  },
  deleteColorGroup: (groupName) => {
    set(
      O.modify(O.optic<ColorStore>().prop('colorState'))((colorState) =>
        colorState.filter((colorGroup) => colorGroup.groupName !== groupName)
      )
    );
  },
  addColorToGroup: (groupName, color) => {
    set(
      O.modify(
        O.optic<ColorStore>()
          .prop('colorState')
          .elems()
          .when((colorGroup) => colorGroup.groupName === groupName)
          .prop('colors')
      )((colors) => colors.concat(color))
    );
  },
  modifyColor: (groupName, colorName, newColor) => {
    set(
      O.set(
        O.optic<ColorStore>()
          .prop('colorState')
          .elems()
          .when((colorGroup) => colorGroup.groupName === groupName)
          .prop('colors')
          .elems()
          .when((color) => color.colorName === colorName)
      )(newColor)
    );
  },
  deleteColor: (groupName, colorName) => {
    set(
      O.modify(
        O.optic<ColorStore>()
          .prop('colorState')
          .elems()
          .when((colorGroup) => colorGroup.groupName === groupName)
          .prop('colors')
      )((colors) => colors.filter((color) => color.colorName !== colorName))
    );
  },
  theme: 'dark',
  setTheme: (setting) => set(() => ({ theme: setting })),
}));

export { useColorStore };
