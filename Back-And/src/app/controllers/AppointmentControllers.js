import Appointment from '../models/Appointments';
import User from '../models/User';
import File from '../models/File';

import { startOfHour, parseISO, isBefore } from 'date-fns';
import * as Yup from 'yup';

class AppointmentController {
  async index(req, res) {
    const appointment = await Appointment.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      order: ['date'],
      attributes: ['id', 'date'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(appointment);
  }
  async store(req, res, next) {
    const shema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await shema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }
    const { provider_id, date } = req.body;
    /**
     * Check if provider_d is a provider
     */

    const checkIsProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers ' });
    }

    // Check is dates

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited ' });
    }

    // Check date availability

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });
    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Appointment date is not available ' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    });
    return res.json(appointment);
  }
}

export default new AppointmentController();
