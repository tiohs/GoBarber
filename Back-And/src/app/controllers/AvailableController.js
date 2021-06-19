import Appointment from '../models/Appointments';
import { Op } from "sequelize";
import { startOfDay, endOfDay} from 'date-fns';

class AvailableController {
  async index(req, res){
    const { date } = req.query;
    if(!date){
      return res.status(400).json({ error : "Invalid date"});
    }

    const searchDate = Number(date);

    const appointments = await Appointment.findAll({
      where : {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between] : [startOfDay(searchDate), endOfDay(searchDate)],
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

    const avaiable = sche
    return res.json(appointments);
  }
}

export default new AvailableController();