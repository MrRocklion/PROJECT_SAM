import './App.css';
import Homepage from './views/Inicio';
import { Routes, Route } from "react-router-dom";
import Userview from './views/user';
function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home/*" element={<Userview />} />
      </Routes>

    </div>

  );
}

export default App;
