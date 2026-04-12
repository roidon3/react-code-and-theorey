import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import ApiCalls from './ApiCalls';
import Hooks from "./Components/Hooks";
import UseReducer from './Components/UseReducer';
import UseRef from './Components/UseRef';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
import CustomHooks from './Components/CustomHooks';
import CustomHooks1 from './Components/CustomHooks1';
import Todo from './Components/CodingQ/Todo';
import WissenQ from './Components/CodingQ/WissenQ';
import StopWatch from './Components/CodingQ/StopWatch';
import InfinteScroll from './Components/CodingQ/InfinteScroll';
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
      <Route path="/customHooks1" element={<CustomHooks1 />} />
      <Route path="/apiCall" element={<ApiCalls />} />
      <Route path="/todo" element={<Todo />} />
      <Route path='/wissen' element={<WissenQ />} />
      <Route path='/stopwatch' element={<StopWatch />} />
      <Route path='/infinite' element={<InfinteScroll />} />
    </Routes>

  );
}

export default App;
