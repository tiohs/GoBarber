import { where } from 'sequelize/types';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) res.status(400).json({ error: 'User exist !' });
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
