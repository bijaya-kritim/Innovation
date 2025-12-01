import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Form from './Form.js';
import UseEffect from './UseEffect.js';
import Users from './Users.js'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/UseEffect" element={<UseEffect/>}/>
        <Route path="Users" element={<Users/>}/>
      </Routes>
    </BrowserRouter>


  );   
}


export default App;

//   Text = ${}