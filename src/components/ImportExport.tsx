import { useColorStore } from '../colorStore';
import { useState } from 'react';

const ImportExport: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>('');
  const setColors = useColorStore((state) => state.setColors);

  const handleClick = () => {
    setOpened(!opened);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextInput(value);
  };

  const handleImport = () => {
    const val = `neutral: {
      1: 'hsl(245, 30%, 92%)',
      2: 'hsl(245, 25%, 86%)',
      3: 'hsl(245, 21%, 74%)',
      4: 'hsl(245, 17%, 61%)',
      5: 'hsl(245, 15%, 49%)',
      6: 'hsl(245, 17%, 37%)',
      7: 'hsl(245, 21%, 25%)',
      8: 'hsl(245, 25%, 15%)',
      9: 'hsl(245, 30%, 10%)',
    }`;
    // const obj = JSON.parse(val);
    const obj = eval(val);
    console.log(obj);
  };

  return (
    <div className='absolute right-0 top-0 flex flex-col px-8 pt-8'>
      {!opened && (
        <button
          onClick={handleClick}
          className='rounded-md bg-neutral-800 px-4 py-2 text-white'
        >
          Import/Export
        </button>
      )}
      <div
        className={`${opened ? 'block' : 'hidden'} size-64 bg-neutral-800 px-4`}
      >
        <button
          onClick={handleClick}
          className='rounded-md bg-black px-4 py-2 text-white'
        >
          Close
        </button>
        <button
          onClick={handleImport}
          className='rounded-md bg-black px-4 py-2 text-white'
        >
          Import
        </button>
        <button
          onClick={handleClick}
          className='rounded-md bg-black px-4 py-2 text-white'
        >
          Export
        </button>
        <textarea
          rows={4}
          onChange={handleInput}
          value={textInput}
          className='w-full rounded-md bg-neutral-600 text-white'
        ></textarea>
      </div>
    </div>
  );
};

export default ImportExport;
