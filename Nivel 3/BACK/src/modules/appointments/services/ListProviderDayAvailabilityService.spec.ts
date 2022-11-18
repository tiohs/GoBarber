import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import ListProviderDayAvailability from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailability: ListProviderDayAvailability;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailability(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 11, 20, 9, 0, 0),
      user_id: 'user',
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 11, 20, 10, 0, 0),
      user_id: 'user',
    });

    jest
      .spyOn(Date, 'now')
      .mockImplementationOnce(() => new Date(2022, 11, 20, 8, 0, 0).getTime());

    const availability = await listProviderDayAvailability.execute({
      provider_id: 'user',
      year: 2022,
      month: 12,
      day: 20,
    });
    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 11, available: true },
      ]),
    );
  });
});
