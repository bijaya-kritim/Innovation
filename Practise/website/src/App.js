import './App.css';
import { Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from "./pages/Contact"; 


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />}/>

        
      </Routes>
    </>
  );
}

export default App;
