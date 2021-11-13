import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use(appointmentsRouter);
routes.use(usersRouter);

export default routes;
