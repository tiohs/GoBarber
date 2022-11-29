import { startOfHour, isBefore, getHours, format } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import AppError from '@shared/error/AppError';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  date: Date;
  user_id: string;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
    @inject('NotificationsRepository')
    private notificationRepository: INotificationsRepository,
  ) {}

  public async execute({
    provider_id,
    date,
    user_id,
  }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    console.log(appointmentDate);
    if (isBefore(appointmentDate, Date.now())) {
      throw new AppError("You can't create an appointment on a past date");
    }
    if (user_id === provider_id) {
      throw new AppError("You can't create an appointment with yourself ");
    }
    if (getHours(appointmentDate) < 8 || getHours(appointmentDate) > 17) {
      throw new AppError(
        'You can only create appointments between 8am and 5pm',
      );
    }

    const findAppointmentInSameDate =
      await this.appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
      user_id,
    });

    const formatDate = format(appointmentDate, "dd/MM/yyyy 'às' HH:mm ");

    await this.notificationRepository.create({
      recipient_id: provider_id,
      content: `Novo agendamento para dia ${formatDate}`,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
