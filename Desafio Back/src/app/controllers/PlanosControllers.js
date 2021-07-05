import * as yup from 'yup';
import Planos from '../models/Planos';

class PlanosControllers {
  async store(req, res) {
    const schema = yup.object().shape({
      title: yup.string().required(),
      duration: yup.number().required(),
      price: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const plano = await Planos.create(req.body);
    return res.json(plano);
  }
  async index(req, res) {
    const planos = await Planos.findAll({
      attributes: ['title', 'duration', 'price'],
    });

    return res.json(planos);
  }
  async update(req, res) {
    const plano = await Planos.findByPk(req.params.id);
    if (!plano) {
      return res.status(400).json('Plano is not exist ! ');
    }
    const schema = yup.object().shape({
      title: yup.string(),
      duration: yup.number(),
      price: yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }
    await plano.update(req.body);
    return res.json(plano);
  }
  async delete(req, res) {
    const plano = await Planos.findByPk(req.params.id);
    if (!plano) {
      return res.status(400).json('Plano is not exist ! ');
    }

    await plano.destroy();
    return res.json(plano);
  }
}

export default new PlanosControllers();
