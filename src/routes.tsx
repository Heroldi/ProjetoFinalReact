import Inicio from './components/BackgroundWelcome';
import Navigation from './components/HomeBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter()  { 
  return (
    <Router>
    <Routes>
      <Route path='/home' element={<Inicio />} />
      <Route path='/navegacao' element={<Navigation />} />
    </Routes>
    </Router>
  );
};