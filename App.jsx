import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Background from './components/Background/Background';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;