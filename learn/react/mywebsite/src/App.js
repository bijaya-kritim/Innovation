import logo from './logo.svg';
import './App.css';


function App() {
  return (

    <>
    <div className='flex justify-center bg-green-300 gap-20 p-5  '>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      <p>Services</p>
    </div>

    <div className='flex justify-center'>
      <div className='w-1/4 bg-white border-2 shadow-xl m-10 p-5'>
        <h1 className='font-bold text-2xl md:3xl text-center'>
          Welcome ! Aadim Innovation
        </h1>
        <h3 className='text-center'>
          good to see you
        </h3>
        <button className='bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-700 mx-auto block'>
          click here
        </button>
      </div>
    </div>
      
      </>


  );
}



export default App;

