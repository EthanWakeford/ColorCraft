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
    },
    primary: {
      dk1: 'hsl(288, 100%, 16%)',
      dk2: 'hsl(296, 95%, 21%)',
      md1: 'hsl(305, 90%, 26%)',
      md2: 'hsl(313, 90%, 31%)',
      md3: 'hsl(321, 95%, 36%)',
      lt1: 'hsl(330, 100%, 41%)',
      lt2: 'hsl(338, 100%, 46%)',
    },
    secondary: {
      dk1: 'hsl(17, 100%, 36%)',
      dk2: 'hsl(22, 100%, 41%)',
      md1: 'hsl(27, 100%, 46%)',
      md2: 'hsl(32, 100%, 50%)',
      md3: 'hsl(37, 100%, 55%)',
      lt1: 'hsl(42, 100%, 60%)',
      lt2: 'hsl(47, 100%, 66%)',
    },`;
    // const obj = JSON.parse(val);
    const output = convertToValidJson(val);
    console.log(output);
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

function convertToValidJson(inputString: string) {
  // Replace single quotes with double quotes
  let validJsonString = inputString.replace(/'/g, '"');

  // Use a regular expression to quote unquoted keys
  validJsonString = validJsonString.replace(/(\w+):/g, '"$1":');

  // Remove trailing commas
  // validJsonString = validJsonString.replace(/,\s*([}\]])/g, '$1');

  // Remove trailing commas
  validJsonString = validJsonString.replace(/,\s*([}\]])/g, '$1');

  // Wrap the string in braces if it does not already start and end with braces
  if (!validJsonString.trim().startsWith('{')) {
    validJsonString = `{${validJsonString}}`;
  }

  console.log(validJsonString);

  // Parse the JSON string
  try {
    const jsonObject = JSON.parse(validJsonString);
    return jsonObject;
  } catch (error) {
    console.error('Invalid JSON format:', error);
    return null;
  }
}
