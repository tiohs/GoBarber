import Appointment from '../models/Appointments';
import * as Yup from 'yup';

class AppointmentController {
  async store(req, res, next) {
    const shema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });
    if (!(await shema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    return res.json({ ok: 'ok' });
  }
}

export default new AppointmentController();
