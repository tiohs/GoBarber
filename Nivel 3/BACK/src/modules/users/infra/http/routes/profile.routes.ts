import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import ProfileController from '../controllers/ProfileControllers';

const usersRouter = Router();

const profileController = new ProfileController();

usersRouter.use(ensureAuthenticated);

usersRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string(),
      old_password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  profileController.update,
);
usersRouter.get('/', profileController.show);
export default usersRouter;
