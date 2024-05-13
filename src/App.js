
import './App.css';
import UseStateHook from './usestate/StateHook'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memo from './usememo/Memo';
import Callback from './usecallback/Callback';
import ReducerHook from './useReducer/ReducerHook';
import Ref from './useRef/Ref';
import Context from './usecontext/Context';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<UseStateHook/>}/>
      <Route path='/usestate' element={<UseStateHook/>}/>
      <Route path='/usememo' element={<Memo/>}/>
      <Route path='/usecallback' element={<Callback/>}/>
      <Route path='/usereducer' element={<ReducerHook/>}/>
      <Route path='/useref' element={<Ref/>}/>
      <Route path='/usecontext' element={<Context/>}/>
    </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
