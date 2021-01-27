import user from '../models/User';

class ProviderControllers {
  index(req, res, net) {
    res.json({ ok: 'sucess!' });
  }
}

export default new ProviderControllers();
