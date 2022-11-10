import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AppContext from './context/store'

function App() {
  const [username, setUsername] = useState('pdunk')
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}


export default App;
