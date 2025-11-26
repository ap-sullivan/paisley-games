
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import News from './pages/News';
import LocalInfo from './pages/LocalInfo';


function App() {


  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/local" element={<LocalInfo />} />
      </Routes>
    </Router>
  )
}

export default App
