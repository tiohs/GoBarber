import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ ok : 'Tudo bem '});
});
app.listen(3333, () => {
  console.log('Localhos port 3333')
});