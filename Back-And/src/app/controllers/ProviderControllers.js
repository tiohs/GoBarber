import user from '../models/User';
import File from '../models/File';

class ProviderControllers {
  async index(req, res, net) {
    const providers = await user.findAll({
      where: { provider: false },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [File],
    });
    res.json(providers);
  }
}

export default new ProviderControllers();
