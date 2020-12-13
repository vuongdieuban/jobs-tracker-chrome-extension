import React from 'react';
import { Person } from '../types';
import './Popup.css';

const createPerson = (p: Person) => {
  return p.name.toUpperCase();
};

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
