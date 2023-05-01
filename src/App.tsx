import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Forms from './pages/Forms';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
