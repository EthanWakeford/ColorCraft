import { useColorStore } from '../colorStore';
import ColorInterface from './ColorInterface';

const ColorView: React.FC = () => {
  const colorState = useColorStore((state) => state.colorState);
  const theme = useColorStore((state) => state.theme);
  const setTheme = useColorStore((state) => state.setTheme);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  console.log(colorState);

  return (
    <div className='h-full bg-white p-8 text-center text-black dark:bg-black dark:text-white'>
      <button
        onClick={handleThemeToggle}
        className='mb-8 rounded-md bg-black p-4 text-white dark:bg-white dark:text-black'
      >
        Switch BG
      </button>
      <ColorInterface colorState={colorState} />
    </div>
  );
};

export default ColorView;
