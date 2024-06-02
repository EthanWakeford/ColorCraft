import { useColorStore } from '../colorStore';
import ColorInterface from './ColorInterface';
import { Icon } from '@iconify/react';

const ColorView: React.FC = () => {
  const colorState = useColorStore((state) => state.colorState);
  const theme = useColorStore((state) => state.theme);
  const setTheme = useColorStore((state) => state.setTheme);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  console.log(colorState);

  return (
    <div
      className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} h-full p-8 text-center`}
    >
      <button
        onClick={handleClick}
        className={`mb-8 rounded-md p-4 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        Switch BG
      </button>
      <div className='flex'>
        <div className='h-full w-32'>
          <button
            className={`size-12 rounded-md text-5xl transition-colors duration-200 active:scale-110 ${theme === 'dark' ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}
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
