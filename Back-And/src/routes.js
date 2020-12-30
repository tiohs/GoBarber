import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import authMiddleware from './app/middlewares/auth';

const router = Router();

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);
router.use(authMiddleware);
router.put('/users', UserController.update);

export default router;
