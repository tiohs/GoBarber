import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ ok: 'Tudo bem ' });
});

export default routes;
