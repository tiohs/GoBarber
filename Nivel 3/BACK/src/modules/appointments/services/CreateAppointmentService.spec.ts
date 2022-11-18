import AppError from '@shared/error/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointmentService: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });
  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '1',
      user_id: '1',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1');
  });

  it('should not be able to create two appointment on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);
    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: '1',
      user_id: '1',
    });

    // rejects - should be on result error
    await expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: '1',
        user_id: '1',
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
        user_id: '1',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
