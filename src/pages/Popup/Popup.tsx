import React, { useState } from 'react';
import './Popup.css';
import { DropRegion } from './views/DropRegion';

function App() {
  const [showRegion, setShowRegion] = useState(false);

  const handleClicked = () => {
    console.log('Button Click to show region');
    setShowRegion(!showRegion);
  };

  return (
    <div>
      <button id='show-button' onClick={handleClicked}>
        Show
      </button>
      {showRegion && <DropRegion />}
    </div>
  );
}

export default App;
