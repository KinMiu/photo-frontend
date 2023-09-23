import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Container from './pages/container'
import Login from './pages/login'
import Signup from './pages/signup'
import Photos from './pages/photos'
import Post from './pages/post'
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post' element={<Post />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/photo-info/:id' element={<Photos />} />
        <Route path='/post-photo' element={<Post />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
