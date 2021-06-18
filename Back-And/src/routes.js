import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import FileController from './app/controllers/FileControllers';
import ProveiderController from './app/controllers/ProviderControllers';
import AppointmentController from './app/controllers/AppointmentControllers';
import ScheduleController from './app/controllers/ScheduleControllers';
import NotificationController from './app/controllers/NotificationControllers';
import authMiddleware from './app/middlewares/auth';
import NotificationController from './app/controllers/NotificationControllers';
import AvailableController from './app/controllers/AvailableController';

const router = new Router();
const upload = multer(multerConfig);

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);
router.use(authMiddleware);
router.put('/users', UserController.update);
router.get('/providers', ProveiderController.index);
router.get('/providers/:providerId/available', AvailableController.index);
router.post('/files', upload.single('file'), FileController.store);
router.post('/appointments', AppointmentController.store);
router.get('/appointments', AppointmentController.index);
router.delete('/appointments/:id', AppointmentController.delete);
router.get('/schedule', ScheduleController.index);
router.get('/notification', NotificationController.index);
router.put('/notification/:id', NotificationController.update);
export default router;
