import { startOfHour, parseISO, isBefore, addMonths } from 'date-fns';
import * as yup from 'yup';

import Matricula from '../models/Matriculas';
import Student from '../models/Students';
import Plano from '../models/Planos';

class MatriculaControllers {
  async store(req, res) {
    const { start_date, student_id, plan_id } = req.body;

    const schema = yup.object().shape({
      start_date: yup.date().required(),
      student_id: yup.number().required(),
      plan_id: yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }
    // Check is dates
    const hourStart = startOfHour(parseISO(req.body.start_date));
    const plano = await Plano.findByPk(req.body.plan_id);
    if (!plano) {
      return res.status(400).json({ error: ' Plan is not exist ' });
    }
    const end_date = addMonths(hourStart, plano.duration);

    if (isBefore(end_date, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited ' });
    }
    const price = plano.duration * plano.price;

    const matricula = await Matricula.create({
      start_date,
      student_id,
      plan_id,
      price,
      end_date,
    });
    res.json(matricula);
  }
  async index(req, res) {
    const matriculas = await Matricula.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price'],
      include: [
        {
          model: Student,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plano,
          attributes: ['id', 'title'],
        },
      ],
    });
    return res.json(matriculas);
  }
  async update(req, res) {
    const matricula = await Matricula.findByPk(req.params.id);
    if (!matricula) {
      return res.status(400).json({ error: 'Matricula is not exist ' });
    }

    if (!!req.body.plan_id) {
      let plano = await Plano.findByPk(req.body.plan_id);
      if (!plano) {
        return res.status(400).json({ error: ' Plan is not exist ' });
      }
      matricula.plan_id = req.body.plan_id;
      matricula.end_date = addMonths(matricula.start_date, plano.duration);
      if (isBefore(matricula.end_date, new Date())) {
        return res.status(400).json({ error: 'Past dates are not permited ' });
      }
      matricula.price = plano.duration * plano.price;
    }
    if (!!req.body.start_date) {
      let { duration } = await Plano.findByPk(matricula.plan_id);
      matricula.end_date = addMonths(parseISO(req.body.start_date), duration);
      matricula.start_date = req.body.start_date;
    }
    await matricula.save();
    res.json(matricula);
  }
  async delete(req, res) {
    const matricula = await Matricula.findByPk(req.params.id);
    if (!matricula) {
      return res.status(400).json({ error: 'Matricula is not exist ' });
    }
    await matricula.destroy();
  }
}

export default new MatriculaControllers();
