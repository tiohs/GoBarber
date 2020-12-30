import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';

const router = Router();

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

export default router;
