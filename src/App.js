import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='min-h-screen flex flex-row p-4 '>
      <div className='mr-10 max-sm'>
          <Sidebar/>
        </div>
        <div className='flex flex-col w-full'>
        <div className='mx-auto w-full sm:pr-5'>
          <Navbar />
        </div>
        <div className='mx-auto w-full sm:pr-5'>
         <Content/>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
