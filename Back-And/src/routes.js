import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import FileController from './app/controllers/FileControllers';
import ProveiderController from './app/controllers/ProviderControllers';

import authMiddleware from './app/middlewares/auth';

const router = new Router();
const upload = multer(multerConfig);

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);
router.use(authMiddleware);
router.put('/users', UserController.update);
router.get('/providers', ProveiderController.index);
router.post('/files', upload.single('file'), FileController.store);

export default router;
