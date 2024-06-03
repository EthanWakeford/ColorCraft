import { useState } from 'react';

interface Props {
  color: Color;
}

const Color: React.FC<Props> = ({ color }) => {
  const [formState, setFormState] = useState<Color>({
    colorName: color.colorName,
    hue: color.hue,
    saturation: color.saturation,
    lightness: color.lightness,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e.target);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  console.log(formState);

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
              value={formState.colorName}
              onChange={handleInputChange}
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
                value={formState.hue}
                onChange={handleInputChange}
              />
            </div>
            <div className='justify-between'>
              <p>S</p>
              <input
                className='w-8 bg-neutral-100 text-black'
                type='text'
                defaultValue={color.saturation}
                name='saturation'
                value={formState.saturation}
                onChange={handleInputChange}
              />
            </div>
            <div className='justify-between'>
              <p>L</p>
              <input
                className='w-8 bg-neutral-100 text-black'
                type='text'
                defaultValue={color.lightness}
                name='lightness'
                value={formState.lightness}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
