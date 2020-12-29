import ReactDOM from 'react-dom';
import React from 'react';

import ExtensionPopup from './Popup';
import './index.css';

const app = document.createElement('div');
app.id = 'jobs-tracker-root';
document.body.appendChild(app);

ReactDOM.render(
  <React.StrictMode>
    <ExtensionPopup />
  </React.StrictMode>,
  app,
);
