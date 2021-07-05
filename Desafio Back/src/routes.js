import { Router } from 'express';

import sessionControllers from './app/controllers/SessionControllers';
import studentControllers from './app/controllers/StudentsControllers';
import PlanoControllers from './app/controllers/PlanosControllers';
import MatriculaControllers from './app/controllers/MatriculasControllers';
import CheckinControllers from './app/controllers/CheckinsControllers';
import StudentsQControllers from './app/controllers/StudentsQuestionControllers';
import auth from './app/middlewares/auth';

const router = new Router();

router.post('/sessions', sessionControllers.store);
router.use(auth);
router.get('/students', studentControllers.index);
router.post('/students', studentControllers.store);
router.post('/planos', PlanoControllers.store);
router.get('/planos', PlanoControllers.index);
router.put('/planos/:id', PlanoControllers.update);
router.delete('/planos/:id', PlanoControllers.delete);
router.post('/matricula', MatriculaControllers.store);
router.get('/matricula', MatriculaControllers.index);
router.put('/matricula/:id', MatriculaControllers.update);
router.delete('/matricula/:id', MatriculaControllers.delete);
router.post('/checkins', CheckinControllers.store);
router.get('/students/:id/checkins/', CheckinControllers.index);
router.post('/students/:id/help-orders/', StudentsQControllers.store);
router.get('/students/:id/help-orders/', StudentsQControllers.index);
router.put('/help-orders/:id/answer', StudentsQControllers.update);

export default router;
