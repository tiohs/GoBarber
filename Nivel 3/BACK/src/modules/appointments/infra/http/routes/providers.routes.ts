import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailability = new ProviderMonthAvailabilityController();
const providerDayAvailability = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().required(),
    },
  }),
  providerMonthAvailability.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().required(),
    },
  }),
  providerDayAvailability.index,
);

export default providersRouter;
