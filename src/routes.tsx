import Inicio from './components/BackgroundWelcome';
import Navigation from './components/HomeBackground';
import Cadastro from './components/CreateUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter()  { 
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Inicio />} />
      <Route path='/login' element={<Inicio />} />
      <Route path='/home' element={<Navigation />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
    </Router>
  );
};