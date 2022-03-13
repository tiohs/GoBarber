import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/uploads';
import CreateUserService from '@modules/users/services/CreateUserService';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const createUser = new CreateUserService();

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
  async (request, response) => {
    const uploadAvatar = new UpdateUserAvatarService();

    const user = await uploadAvatar.execute({
      userId: request.user.id,
      avatarFilename: request.file?.filename,
    });

    return response.json(user);
  },
);
export default usersRouter;
