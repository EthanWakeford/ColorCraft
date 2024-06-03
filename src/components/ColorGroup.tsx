import Color from './Color';
import { useColorStore } from '../colorStore';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  colorGroup: ColorGroup;
}

const ColorGroup: React.FC<Props> = ({ colorGroup }) => {
  const addColorToGroup = useColorStore((state) => state.addColorToGroup);
  const deleteColorGroup = useColorStore((state) => state.deleteColorGroup);

  const handleAddColor = () => {
    console.log(colorGroup.colors.slice(-1));
    addColorToGroup(colorGroup.groupName, colorGroup.colors.slice(-1)[0]);
  };

  const handleDeleteGroup = () => {
    deleteColorGroup(colorGroup.groupName);
  };

  return (
    <div className='flex w-full flex-wrap'>
      <div className='size-32 text-left'>
        <h2>{colorGroup.groupName}</h2>
        <button
          onClick={handleDeleteGroup}
          className='size-12 rounded-md bg-white text-5xl text-black hover:bg-black hover:text-white active:scale-110 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'
        >
          <Icon icon={'mdi:minus'}></Icon>
        </button>
      </div>
      {colorGroup.colors.map((color, index) => (
        <Color key={index} color={color} groupName={colorGroup.groupName} />
      ))}
      {colorGroup.colors.length < 10 && (
        <div className='flex size-32 items-center justify-center'>
          <button
            onClick={handleAddColor}
            className='size-12 rounded-md bg-white text-5xl text-black hover:bg-black hover:text-white active:scale-110 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'
          >
            <Icon icon={'mdi:plus'}></Icon>
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorGroup;
