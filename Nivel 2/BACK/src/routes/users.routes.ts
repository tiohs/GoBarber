import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

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

export default usersRouter;
