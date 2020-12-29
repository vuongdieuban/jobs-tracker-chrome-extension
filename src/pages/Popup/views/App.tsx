import React, { DragEvent } from 'react';

export function App() {
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    console.log('Dropeed');
    e.preventDefault();
    console.log('Drop', e);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div id='main-app'>
      <div id='drop-box' onDrop={handleDrop} onDragOver={handleDragOver}></div>
      Hello
    </div>
  );
}
