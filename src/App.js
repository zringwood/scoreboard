import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Scoreboard from './pages/Scoreboard/Scoreboard';
import NewMatch from './pages/NewMatch/NewMatch';
import Controller from './pages/Controller/Controller';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewMatch />}/>
        <Route path="/display/:id" element={<Scoreboard/>}/>
        <Route path="/controller/:id" element={<Controller />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
