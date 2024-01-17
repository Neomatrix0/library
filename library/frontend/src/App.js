
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import CreateBookP from './pages/CreateBookP';
import DisplayBookP from './pages/DisplayBookP';
import About from './pages/About';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<DisplayBookP/>}/>
        <Route path="/create" element={<CreateBookP/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </Router>
   
  );
}

export default App;
