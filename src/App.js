import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import CustomHooks from './CustomHooks';
import ApiCalls from './ApiCalls';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customHooks" element={<CustomHooks />} />
      <Route path="/apiCalls" element={<ApiCalls />} />
    </Routes>

  );
}

export default App;
