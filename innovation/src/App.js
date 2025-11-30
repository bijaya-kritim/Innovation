import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './Aboutus';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Form from './Form';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about/:message' element={<Aboutus/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
