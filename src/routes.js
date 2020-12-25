import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.json({ ols: 'Hello Hamilton Silva 55' });
});

export default router;
