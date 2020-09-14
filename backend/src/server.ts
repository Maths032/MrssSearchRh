import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello world' }));

app.listen(3333, () => {
  console.log('server started!');
});
