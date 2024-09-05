import React from 'react';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="left-box">
        
      </div>
      <div className="right-widgets">
        <div className="widget">
          <Tabs />
        </div>
        <div className="widget">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
