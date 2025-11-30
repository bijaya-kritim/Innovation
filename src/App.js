
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Body from './Body';
import Heading from './Heading';
import Headerandbody from './Headerandbody';
import Home from './Reacttask/Home';
import About from './Reacttask/About';
import Projects from './Reacttask/Projects';
import Contact from './Practice/Contact';
import Aboutus from './Practice/Aboutus';
import Heros from './Practice/Heros';


function App() {
  return (
   <>
   {/* calling other files here */}
   {/* <Heading/>
   <Body/> */}
   {/* <Headerandbody/> */}
   
   {/* <Home/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>} ></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>

   </Routes>
   </BrowserRouter>
   {/* <BrowserRouter>
   <Routes>
    <Route path='/' element={<Heros/>}></Route>
    <Route path='/about:message' element={<Aboutus/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    
    </Routes>
    </BrowserRouter> */}
   
   </>
  );
}

export default App;
