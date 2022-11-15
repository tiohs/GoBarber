import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ProfileController from '../controllers/ProfileControllers';

const usersRouter = Router();

const profileController = new ProfileController();

usersRouter.use(ensureAuthenticated);

usersRouter.put('/', profileController.update);
export default usersRouter;
