import Appointment from '../models/Appointments';
import { Op } from "sequelize";
import { startOfDay, endOfDay, setHours, setMinutes, setSeconds, format, isAfter } from 'date-fns';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ error: "Invalid date" });
    }

    const searchDate = Number(date);

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        },
      },
    });

    const shedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00'
    ];

    const avaiable = shedule.map(time => {
      const [hour, minute] = time.split(':');
      const value = setSeconds(setMinutes(setHours(searchDate, hour), minute), 0);

      return {
        time, 
        value: format(value, "yyy-MM-dd'T'HH:mm:ssxxx"),
        avaiable : isAfter(value, new Date()) && !appointments.find(a => {
          return format(a.date, 'HH:mm') === time
        }),
      }
    });
    console.log(format(appointments[0].date, 'HH:mm') ===  '17:00');
    return res.json(avaiable);
  }
}

export default new AvailableController();