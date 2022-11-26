import AppError from '@shared/error/AppError';
import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointmentService: CreateAppointmentService;
let fakeNotificationsRepository: FakeNotificationsRepository;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeNotificationsRepository = new FakeNotificationsRepository();

    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
      fakeNotificationsRepository,
    );
  });
  it('should be able to create a new appointment', async () => {
    jest
      .spyOn(Date, 'now')
      .mockImplementationOnce(() => new Date(2023, 4, 10, 12).getTime());

    const appointment = await createAppointmentService.execute({
      date: new Date(2023, 4, 10, 14),
      provider_id: '1',
      user_id: '2',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1');
  });
  it('should not be able to create two appointment on the same time', async () => {
    const appointmentDate = new Date(2022, 4, 10, 12);
    jest
      .spyOn(Date, 'now')
      .mockImplementation(() => new Date(2022, 4, 8, 8).getTime());

    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: '1',
      user_id: '2',
    });

    // rejects - should be on result error
    await expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: '1',
        user_id: '2',
      }),
    ).rejects.toBeInstanceOf(AppError); // Espera que o erro seja uma instacia de AppError
  });
  it('should not be able to create an appointments on a past date', async () => {
    jest
      .spyOn(Date, 'now')
      .mockImplementationOnce(() => new Date(2020, 4, 10, 12).getTime());

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 4, 10, 11),
        provider_id: '1',
        user_id: '2',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to create an appointment with same user as provider', async () => {
    jest
      .spyOn(Date, 'now')
      .mockImplementation(() => new Date(2020, 4, 11, 10).getTime());

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 4, 11, 12),
        provider_id: '1',
        user_id: '1',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to create an appointment outside before 8am and after 5pm', async () => {
    jest
      .spyOn(Date, 'now')
      .mockImplementationOnce(() => new Date(2020, 4, 1, 12).getTime());

    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 4, 10, 7),
        provider_id: '2',
        user_id: '1',
      }),
    ).rejects.toBeInstanceOf(AppError);
    await expect(
      createAppointmentService.execute({
        date: new Date(2020, 4, 10, 18),
        provider_id: '2',
        user_id: '1',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
