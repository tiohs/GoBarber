import { Router } from 'express';

import CreateUserSevice from '../services/CreateUserSevice';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserSevice();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  } catch ({ message }) {
    return response.status(400).json({ error: message });
  }
});

export default usersRouter;
