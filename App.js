
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Encode from './Encode';
import Decode from './Decode';
import Detect from './Detect';
import About from './About'
import Navbar from './Navbar';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/encode' element={<Encode />}></Route>
      <Route path='/decode' element={<Decode />}></Route>
      <Route path='/detect' element={<Detect />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
