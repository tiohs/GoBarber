import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import ListProviderMonthAvailability from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailability;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailability(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
     await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 11, 20, 8, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 11, 20, 10, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 11, 21, 8, 0, 0),
    });
    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2022,
      month: 12,
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
