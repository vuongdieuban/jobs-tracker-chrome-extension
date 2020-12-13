import { printLine } from './modules/print';
import { Person } from '../types';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

const createPerson = (p: Person) => {
  return p.name.toUpperCase();
};

printLine("Using the 'printLine' function from the Print Module");

console.log('Hello', createPerson({ name: 'ban' }));
