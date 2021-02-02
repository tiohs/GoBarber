import user from '../models/User';
import File from '../models/File';

class ProviderControllers {
  async index(req, res, net) {
    const providers = await user.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    res.json(providers);
  }
}

export default new ProviderControllers();
