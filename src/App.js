import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import CustomHooks from './CustomHooks';
import ApiCalls from './ApiCalls';
import Hooks from "./Components/Hooks";
import UseReducer from './Components/UseReducer';
import UseRef from './Components/UseRef';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customHooks" element={<CustomHooks />} />
      <Route path="/apiCalls" element={<ApiCalls />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallback" element={<UseCallback />} />
         <Route path="/customHooks" element={<CustomHooks />} />


    </Routes>

  );
}

export default App;
