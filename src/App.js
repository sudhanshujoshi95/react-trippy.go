import './App.css';
import Contact from './routes/Contact';
import Home from "./routes/Home";
import Service from './routes/Service';
import About from './routes/About';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
