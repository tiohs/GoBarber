import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ResetPasswordControllers from '../controllers/ResetPasswordControllers';
import ForgotPasswordController from '../controllers/ForgotPasswordController';

const passwordRouter = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordControllers = new ResetPasswordControllers();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);
passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordControllers.create,
);

export default passwordRouter;
