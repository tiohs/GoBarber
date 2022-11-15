import AppError from '@shared/error/AppError';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail@google.com',
      password: '123456',
    });

    const updadatedUser = await updateProfile.execute({
      userId: user.id,
      name: 'Carlos Severino',
      email: 'carlos-severino@google.com',
    });

    // expect(appointment.id).toBe('039390-he3009');

    expect(updadatedUser.name).toBe('Carlos Severino');
    expect(updadatedUser.email).toBe('carlos-severino@google.com');
  });

  //

  it('should not be able change email of a existing another user email', async () => {
    await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail@google.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'carlos-severino@google.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        userId: user.id,
        name: 'Carlos Severino',
        email: 'myemail@google.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  //

  it('should not be able to update the profile of a non existing user', async () => {
    expect(
      updateProfile.execute({
        userId: 'non existing user id',
        name: 'Carlos Severino',
        email: 'myemail@google.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  //

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail@google.com',
      password: '123456',
    });

    const updadatedUser = await updateProfile.execute({
      userId: user.id,
      name: 'Carlos Severino',
      email: 'carlos-severino@google.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updadatedUser.password).toBe('123123');
  });

  it('should not be able to update the password without old Password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail@google.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        userId: user.id,
        name: 'Carlos Severino',
        email: 'carlos-severino@google.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old Password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'My Name',
      email: 'myemail@google.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        userId: user.id,
        name: 'Carlos Severino',
        email: 'carlos-severino@google.com',
        password: '123123',
        old_password: '333333',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
