import {BrowserRouter,Route,Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Reacttask/Home';
import About from './Reacttask/About';
import Service from './Reacttask/Service';
import Design from './Reacttask/Design';
import Contact from './Reacttask/Contact';
import Login from './Reacttask/Login';
import Signup from './Reacttask/Signup';




function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>} ></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/Design' element={<Design/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
