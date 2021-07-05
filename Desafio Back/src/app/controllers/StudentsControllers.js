import * as yup from 'yup';

import Students from '../models/Students';

class studentsController {
  async index(req, res) {
    const students = await Students.findAll({
      order: ['createdAt'],
    });
    res.json(students);
  }
  async store(req, res) {
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      name: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }
    const studentExists = await Students.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) return res.status(400).json({ error: 'User exist !' });

    const { name, email } = await Students.create(req.body);
    return res.json({ name, email });
  }
}

export default new studentsController();
