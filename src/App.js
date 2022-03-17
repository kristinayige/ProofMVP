import './App.css';
import Minter from './Minter'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Minter />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />} ></Route>
        </Routes>
      </Router >
    </div>
  );
}


export default App;
