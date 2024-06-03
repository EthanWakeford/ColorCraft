import Color from './Color';
import { useColorStore } from '../colorStore';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  colorGroup: ColorGroup;
}

const ColorGroup: React.FC<Props> = ({ colorGroup }) => {
  const addColorToGroup = useColorStore((state) => state.addColorToGroup);
  const modifyColorGroup = useColorStore((state) => state.modifyColorGroup);
  const deleteColorGroup = useColorStore((state) => state.deleteColorGroup);

  console.log(colorGroup);

  const handleAddColor = () => {
    addColorToGroup(colorGroup.groupName, {
      ...colorGroup.colors[colorGroup.colors.length - 1],
      colorName: String(colorGroup.colors.length + 1),
    });
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    modifyColorGroup(colorGroup.groupName, { ...colorGroup, groupName: value });
  };

  const handleDeleteGroup = () => {
    deleteColorGroup(colorGroup.groupName);
  };

  return (
    <div className='flex w-full flex-wrap'>
      <div className='size-32 p-2 text-left'>
        <input
          className='mb-4 w-full rounded-md bg-neutral-300 text-black dark:bg-neutral-700 dark:text-white'
          type='text'
          name='groupName'
          value={colorGroup.groupName}
          onChange={handleNameInput}
        ></input>
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
