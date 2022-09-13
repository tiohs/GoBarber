import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(fakeAppointmentsRepository);
    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '1',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1');
  });

  // it('should not be able to create two appointment on the same time', () => {
  //   expect(1 + 3).toBe(4);
  // });
});
