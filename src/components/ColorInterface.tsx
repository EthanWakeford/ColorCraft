import ColorGroup from './ColorGroup';
import { useColorStore } from '../colorStore';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  colorState: ColorGroup[];
}

const ColorInterface: React.FC<Props> = ({ colorState }) => {
  const addColorGroup = useColorStore((state) => state.addColorGroup);

  const handleAddNewGroup = () => {
    addColorGroup();
  };

  return (
    <div className=''>
      {colorState.map((colorGroup, index) => (
        <ColorGroup key={index} colorGroup={colorGroup} />
      ))}
      <div className='flex size-32 items-center justify-center'>
        <button
          onClick={handleAddNewGroup}
          className='size-12 rounded-md bg-white text-5xl text-black hover:bg-black hover:text-white active:scale-110 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'
        >
          <Icon icon={'mdi:plus'}></Icon>
        </button>
      </div>
    </div>
  );
};

export default ColorInterface;
