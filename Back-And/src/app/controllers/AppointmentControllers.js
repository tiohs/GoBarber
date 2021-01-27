import Appointment from '../models/Appointments';

class AppointmentController {
  async store(req, res, next) {
    return res.json({ ok: 'ok' });
  }
}

export default new AppointmentController();
