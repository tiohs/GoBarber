import { startOfWeek, endOfWeek } from 'date-fns';
import { Op } from 'sequelize';
import * as yup from 'yup';

import Checkins from '../models/Checkins';
class CheckinsControllers {
  async index(req, res) {
    const checkins = await Checkins.findAll({
      where: {
        student_id: req.params.id,
      },
    });
    return res.json(checkins);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      student_id: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }
    // Verificar o numero de checks na semana
    const { student_id } = req.body;
    const agoDate = new Date();
    const allStudentCheckins = await Checkins.findAll({
      where: {
        student_id,
        created_at: {
          [Op.between]: [startOfWeek(agoDate), endOfWeek(agoDate)],
        },
      },
    });
    if (allStudentCheckins.length >= 5) {
      return res
        .status(400)
        .json({ error: " Student don't can to make five checkins of Week " });
    }
    const checkins = await Checkins.create(req.body);
    return res.json(checkins);
  }
}

export default new CheckinsControllers();
