import ColorView from './ColorView';
import { useColorStore } from '../colorStore';
import ImportExport from './ImportExport';

const App: React.FC = () => {
  const theme = useColorStore((state) => state.theme);

  return (
    <>
      <main
        className={`h-screen w-screen ${theme === 'dark' && 'dark'} transition-colors duration-200`}
      >
        <header className='flex h-32 items-center justify-center bg-slate-900 text-green-300'>
          <h1 className='text-center text-3xl'>Craft Your Colors.</h1>
        </header>
        <ColorView />
        <ImportExport />
      </main>
    </>
  );
};

export default App;
