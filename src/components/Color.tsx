import { useColorStore } from '../colorStore';

interface Props {
  color: Color;
  groupName: string;
}

const Color: React.FC<Props> = ({ color, groupName }) => {
  const modifyColor = useColorStore((state) => state.modifyColor);

  // @ts-ignore
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    modifyColor(groupName, color.colorName, { ...color, [name]: value });
  };

  // @ts-ignore
  const handleKeyDown = (e: any) => {
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
        <div className='flex flex-col justify-end bg-neutral-800'>
          <div className='flex justify-between'>
            <p>Name</p>
            <input
              className='w-16 bg-neutral-100 text-black'
              type='text'
              defaultValue={color.colorName}
              name='colorName'
              value={color.colorName}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className='flex justify-between'>
            <div className='justify-between'>
              <p>H</p>
              <input
                className='w-8 bg-neutral-100 text-black'
                type='text'
                defaultValue={color.hue}
                name='hue'
                value={color.hue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='justify-between'>
              <p>S</p>
              <input
                className='w-8 bg-neutral-100 text-black'
                type='text'
                defaultValue={color.saturation}
                name='saturation'
                value={color.saturation}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='justify-between'>
              <p>L</p>
              <input
                className='w-8 bg-neutral-100 text-black'
                type='text'
                defaultValue={color.lightness}
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
