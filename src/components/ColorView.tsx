import { useColorStore } from '../colorStore';
import ColorInterface from './ColorInterface';
import { Icon } from '@iconify/react';

const ColorView: React.FC = () => {
  const colorState = useColorStore((state) => state.colorState);
  const theme = useColorStore((state) => state.theme);
  const setTheme = useColorStore((state) => state.setTheme);
  const addColorGroup = useColorStore((state) => state.addColorGroup);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleAddNewGroup = () => {
    addColorGroup();
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
      <div className='flex'>
        <div className='h-full w-32'>
          <button
            onClick={handleAddNewGroup}
            className='size-12 rounded-md bg-white text-5xl text-black hover:bg-black hover:text-white active:scale-110 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'
          >
            <Icon icon={'mdi:plus'}></Icon>
          </button>
        </div>
        <ColorInterface colorState={colorState} />
      </div>
    </div>
  );
};

export default ColorView;
