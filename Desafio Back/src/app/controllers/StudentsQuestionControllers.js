import Help_Orders from '../models/Help_orders';

class StudentsQuestions {
  async store(req, res, next) {
    const { question } = req.body;
    const student_id = req.params.id;

    const questions = await Help_Orders.create({
      student_id,
      question,
    });
    return res.json(questions);
  }
  async index(req, res, next) {
    const questions = await Help_Orders.findAll({
      where: {
        student_id: req.params.id,
      },
    });
    return res.json(questions);
  }
  async update(req, res, next) {
    const { answer } = req.body;
    const question = await Help_Orders.findByPk(req.params.id);
    await question.update({
      answer,
      answer_at: new Date(),
    });
    res.json(question);
  }
}

export default new StudentsQuestions();
