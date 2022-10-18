import { Router } from 'express';
import ResetPasswordControllers from '../controllers/ResetPasswordControllers';
import ForgotPasswordController from '../controllers/ForgotPasswordController';

const passwordRouter = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordControllers = new ResetPasswordControllers();

passwordRouter.post('/forget', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordControllers.create);

export default passwordRouter;
