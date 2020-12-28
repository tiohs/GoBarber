import { Router } from 'express';

import UserController from './app/controllers/UserControllers';

const router = Router();

router.post('/users', UserController.store);

export default router;
