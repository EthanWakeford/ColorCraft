import { useState } from 'react';

const ColorView: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`${isClicked ? 'bg-white' : 'bg-black'} h-full p-8 text-center`}
    >
      <button
        onClick={handleClick}
        className={`mb-8 rounded-md p-4 ${isClicked ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        Switch BG
      </button>
      <div className='flex w-full items-center'>
        <div className='bg-neutral-1 size-32'></div>
        <div className='bg-neutral-2 size-32'></div>
        <div className='bg-neutral-3 size-32'></div>
        <div className='bg-neutral-4 size-32'></div>
        <div className='bg-neutral-5 size-32'></div>
        <div className='bg-neutral-6 size-32'></div>
        <div className='bg-neutral-7 size-32'></div>
        <div className='bg-neutral-8 size-32'></div>
        <div className='bg-neutral-9 size-32'></div>
        <h2 className={`${isClicked ? 'text-black' : 'text-white'}`}>
          neutral
        </h2>
      </div>
      <div className='flex w-full items-center'>
        <div className='bg-primary-dk1 size-32'></div>
        <div className='bg-primary-dk2 size-32'></div>
        <div className='bg-primary-md1 size-32'></div>
        <div className='bg-primary-md2 size-32'></div>
        <div className='bg-primary-md3 size-32'></div>
        <div className='bg-primary-lt1 size-32'></div>
        <div className='bg-primary-lt2 size-32'></div>
        <h2 className={`${isClicked ? 'text-black' : 'text-white'}`}>
          primary
        </h2>
      </div>
      <div className='flex w-full'>
        <div className='bg-secondary-dk1 size-32'></div>
        <div className='bg-secondary-dk2 size-32'></div>
        <div className='bg-secondary-md1 size-32'></div>
        <div className='bg-secondary-md2 size-32'></div>
        <div className='bg-secondary-md3 size-32'></div>
        <div className='bg-secondary-lt1 size-32'></div>
        <div className='bg-secondary-lt2 size-32'></div>
        <h2 className={`${isClicked ? 'text-black' : 'text-white'}`}>
          secondary
        </h2>
      </div>
    </div>
  );
};

export default ColorView;
