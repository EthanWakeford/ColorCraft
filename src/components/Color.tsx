import { useColorStore } from '../colorStore';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
  color: Color;
  groupName: string;
}

const Color: React.FC<Props> = ({ color, groupName }) => {
  const modifyColor = useColorStore((state) => state.modifyColor);
  const deleteColor = useColorStore((state) => state.deleteColor);

  const handleDeleteColor = () => {
    deleteColor(groupName, color.colorName);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    modifyColor(groupName, color.colorName, { ...color, [name]: value });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('hello');
    }
  };

  return (
    <div
      className='relative size-32'
      style={{
        backgroundColor: `hsl(${color.hue}, ${color.saturation}, ${color.lightness})`,
      }}
    >
      <div className='absolute inset-0 z-50 text-white opacity-0 hover:opacity-100'>
        <div className='flex flex-col justify-end bg-neutral-800 p-1'>
          <div className='flex justify-between'>
            <button className='hover:scale-105' onClick={handleDeleteColor}>
              <Icon className='size-6' icon='mdi:close'></Icon>
            </button>
            <p className='text-sm'>Name</p>
            <input
              className='w-8 rounded-md bg-neutral-100 text-black'
              type='text'
              name='colorName'
              value={color.colorName}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className='flex justify-between pb-1'>
            <div className='justify-between'>
              <p className='text-sm'>H</p>
              <input
                className='w-8 rounded-md bg-neutral-100 text-black'
                type='text'
                name='hue'
                value={color.hue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='justify-between'>
              <p className='text-sm'>S</p>
              <input
                className='w-8 rounded-md bg-neutral-100 text-black'
                type='text'
                name='saturation'
                value={color.saturation}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='justify-between'>
              <p className='text-sm'>L</p>
              <input
                className='w-8 rounded-md bg-neutral-100 text-black'
                type='text'
                name='lightness'
                value={color.lightness}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
