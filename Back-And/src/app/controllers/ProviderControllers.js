import user from '../models/User';

class ProviderControllers {
  async index(req, res, net) {
    const providers = await user.findAll({
      where: { provider: false },
      attributes: ['id', 'name', 'email', 'avatar_id'],
    });
    res.json(providers);
  }
}

export default new ProviderControllers();
