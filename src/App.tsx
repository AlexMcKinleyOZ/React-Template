import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import KV from './components/KV';
import GridTools from './components/GridTools';
import GridWorks from './components/GridWorks';
import Contact from './components/Contact';


const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar/>
      <main>
        <KV />
        <GridTools />
        <GridWorks />
        <Contact />

      </main>
    </div>
  );
};

export default App
