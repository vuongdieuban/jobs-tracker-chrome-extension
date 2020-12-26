import React, { DragEvent } from 'react';
import { Person } from '../types';
import './Popup.css';

const createPerson = (p: Person) => {
  return p.name.toUpperCase();
};

function App() {
  const person = createPerson({ name: 'Ban' });

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    console.log('Dropeed');
    e.preventDefault();
    console.log('Drop', e);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div id='div2' onDrop={handleDrop} onDragOver={handleDragOver}></div>
      </header>
    </div>
  );
}

export default App;
