
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Body from './Body';
import Heading from './Heading';
import Headerandbody from './Headerandbody';
import Home from './Reacttask/Home';
import About from './Reacttask/About';
import Projects from './Reacttask/Projects';
import Aboutus from './Practice/Aboutus';
import Heros from './Practice/Heros';
import Form from './Practice/Form';
import Useeffect from './Useeffect/Useeffect';
import User from './Useeffect/User';
import Contactme from './Reacttask/Contactme';
import Projectdetails from './Reacttask/Projectdetails';


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
    <Route path='/contactme' element={<Contactme/>}></Route>
    <Route path='/projectdetails:id' element={<Projectdetails/>}></Route>
   </Routes>
   </BrowserRouter>
   {/* <BrowserRouter>
   <Routes>
    <Route path='/' element={<Heros/>}></Route>
    <Route path='/about:message' element={<Aboutus/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/form' element={<Form/>}></Route>
    
    </Routes>
    </BrowserRouter> */}
    {/* <Useeffect/> */}
    {/* <User/> */}
    
   
   </>
  );
}

export default App;
