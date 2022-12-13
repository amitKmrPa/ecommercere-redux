import './App.css';
import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div className="App" style={{
       backgroundColor : 'greenyellow',
       height : '750px'
      }}>
      <Router>
      <NavBar />
        <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/userLogin'} element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
