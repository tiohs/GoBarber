import FakeAppointmentsRepository from '../repositories/fakes/FakesAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointmentsService: ListProviderAppointmentsService;

describe('ListProvidersAppointmentsService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppointmentsService = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 11, 20, 9, 0, 0),
      user_id: 'user',
    });
    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2022, 11, 20, 10, 0, 0),
      user_id: 'user',
    });

    const availability = await listProviderAppointmentsService.execute({
      provider_id: 'user',
      year: 2022,
      month: 12,
      day: 20,
    });
    expect(availability).toEqual([appointment1, appointment2]);
  });
});
