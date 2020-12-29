import React, { useState } from 'react';
import './Popup.css';
import { App } from './views/App';

function ExtensionPopup() {
  const [showApp, setshowApp] = useState(false);

  const handleClicked = () => {
    setshowApp(!showApp);
  };

  return (
    <div>
      <button id='show-app-button' onClick={handleClicked}>
        Show
      </button>
      {showApp && <App />}
    </div>
  );
}

export default ExtensionPopup;
