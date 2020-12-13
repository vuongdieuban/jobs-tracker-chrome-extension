import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

import { Person } from '../types';

const createPerson = (p: Person) => {
  return p.name.toUpperCase();
};

const name = createPerson({ name: 'Ban' });

console.log('Hello', name);

console.log('This is the background page.');
