import { Router } from 'express';

import UserController from './app/controllers/UserControllers';

const router = Router();

router.get('/', UserController.store);

export default router;
