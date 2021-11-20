import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/uploads';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    await createUser.execute({
      name,
      email,
      password,
    });

    return response.json({ name, email });
  } catch ({ message }) {
    return response.status(400).json({ error: message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    response.json({ ok: 'Ola mundo ' });
  },
);
export default usersRouter;
