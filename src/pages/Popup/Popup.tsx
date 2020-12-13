import React from 'react';
import { Person } from '../types';
import './Popup.css';
import { ApiConfig, OperationMode } from 'api-lib/dist/config';
import { PlatformService } from 'api-lib/dist/services/platform.service';

const env = process.env.NODE_ENV;
ApiConfig.setOperationMode(env === 'development' ? OperationMode.DEV : OperationMode.PROD);

const createPerson = (p: Person) => {
  return p.name.toUpperCase();
};

const service = new PlatformService();
service.findAll().then(data => {
  console.log('Platform', data);
});

function App() {
  const person = createPerson({ name: 'Ban' });
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Hello {person}</p>
      </header>
    </div>
  );
}

export default App;
