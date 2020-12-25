import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import { ApiConfig, OperationMode } from 'api-lib/dist/config';
import { AuthenticationService } from 'api-lib/dist/services/';

const env = process.env.NODE_ENV;
ApiConfig.setOperationMode(env === 'development' ? OperationMode.DEV : OperationMode.PROD);

import { Person } from '../types';

const createPerson = (p: Person) => {
  return p.name.toUpperCase();
};

const name = createPerson({ name: 'Ban' });

console.log('Hello', name);

console.log('This is the background page.');

const authService = new AuthenticationService();
authService.renewToken().then(data => {
  console.log('Renew Token', data);
});
