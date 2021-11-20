import 'reflect-metadata';
import express from 'express';

import configAvatar from './config/uploads';
import routes from './routes';
import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(configAvatar.directory));
app.use(routes);

app.listen(4000, () => {
  console.log('Localhost port 4000');
});
