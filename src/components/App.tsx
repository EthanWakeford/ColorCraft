import ColorView from './ColorView';

const App: React.FC = () => {
  return (
    <>
      <main className='h-screen w-screen'>
        <header className='flex h-32 items-center justify-center bg-slate-900 text-green-300'>
          <h1 className='text-center text-3xl'>Craft Your Colors.</h1>
        </header>
        <ColorView />
      </main>
    </>
  );
};

export default App;
