import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import ListProviderMonthAvailability from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailability;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailability();
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 12, 20, 8, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 12, 20, 10, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 12, 21, 8, 0, 0),
    });
    const availability = await listProviderMonthAvailability.execute({
      userId: 'user',
      year: 2020,
      month: 5,
    });
    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, availability: true },
        { day: 20, availability: false },
        { day: 21, availability: false },
        { day: 22, availability: true },
      ]),
    );
  });
});
