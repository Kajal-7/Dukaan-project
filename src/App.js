import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='min-h-screen flex flex-row bg-[#13131a] p-4'>
        <div className='mx-auto w-full sm:pr-5'>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
