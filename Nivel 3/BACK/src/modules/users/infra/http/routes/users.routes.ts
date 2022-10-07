import { Router } from 'express';
import multer from 'multer';
import { container } from 'tsyringe';

import uploadConfig from '@config/uploads';
import CreateUserService from '@modules/users/services/CreateUserService';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const userAvatarController = new UserAvatarController();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const createUser = container.resolve(CreateUserService);

  await createUser.execute({
    name,
    email,
    password,
  });
  return response.json({ name, email });
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.create,
);
export default usersRouter;
