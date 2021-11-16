import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticateUserService();
  try {
    const { user } = await authenticateUser.execute({
      email,
      password,
    });

    response.json({ user });
  } catch ({ message }) {
    response.json({ message });
  }
});

export default sessionsRouter;
