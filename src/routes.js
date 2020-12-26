import { Router } from 'express';
import User from './app/models/User';

const router = Router();

router.get('/', async (req, res, next) => {
  const user = await User.create({
    name: 'Hamilton Silva',
    email: 'hamiltonsilva551@gmail.com',
    password_hash: '1234567890',
  });
  res.json(user);
});

export default router;
