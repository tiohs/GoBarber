import FakeUsersRepository from '@modules/users/Repositories/fakes/FakeUsersRepository';

import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProvidersService = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail@google.com',
      password: '123456',
    });

    const user1 = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail3@google.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail1@google.com',
      password: '123456',
    });
    const providers = await listProvidersService.execute({
      userId: loggedUser.id,
    });
    expect(providers).toEqual([user, user1]);
  });
});
