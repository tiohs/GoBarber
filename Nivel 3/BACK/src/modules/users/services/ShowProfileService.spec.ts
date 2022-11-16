import AppError from '@shared/error/AppError';

import FakeUsersRepository from '@modules/users/Repositories/fakes/FakeUsersRepository';

import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail@google.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      userId: user.id,
    });

    expect(profile.name).toBe('My Name');
    expect(profile.email).toBe('myemail@google.com');
  });

  //

  it('should not be able to show the profile of a non existing user', async () => {
    expect(
      showProfile.execute({
        userId: 'non existing user id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
