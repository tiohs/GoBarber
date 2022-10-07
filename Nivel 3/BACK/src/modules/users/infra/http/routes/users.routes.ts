import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/uploads';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';
import UserController from '../controllers/UserController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const userAvatarController = new UserAvatarController();
const userController = new UserController();

usersRouter.post('/', userController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);
export default usersRouter;
