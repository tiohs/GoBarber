import FakeStorageProvider from '@shared/container/providers/StoryProvider/Fakes/FakeStorageProvider';
import AppError from '@shared/error/AppError';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('UpdateUserAvatar', () => {
  it('should be able to create a new avatar to user ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    // eslint-disable-next-line max-len
    const updateUserAvatarService = new UpdateUserAvatarService(fakeUsersRepository, fakeStorageProvider);
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      avatarFilename: 'avatar.jpg',
      userId: user.id,
    });
    expect(user.avatar).toBe('avatar.jpg');
  });
  it('should be able to create a new avatar to user ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    // eslint-disable-next-line max-len
    const updateUserAvatarService = new UpdateUserAvatarService(fakeUsersRepository, fakeStorageProvider);

    await expect(updateUserAvatarService.execute({
      avatarFilename: 'avatar.jpg',
      userId: 'not-exist',
    })).rejects.toBeInstanceOf(Error);
  });
  it('should be able delete avatar and create a new avatar to user  ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    // eslint-disable-next-line max-len
    const updateUserAvatarService = new UpdateUserAvatarService(fakeUsersRepository, fakeStorageProvider);
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      avatarFilename: 'avatar.jpg',
      userId: user.id,
    });
    const response = await updateUserAvatarService.execute({
      avatarFilename: 'avatar1.jpg',
      userId: user.id,
    });
    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');
    expect(response.avatar).toBe('avatar1.jpg');
  });
  it('should be able to create a new avatar to user ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    // eslint-disable-next-line max-len
    const updateUserAvatarService = new UpdateUserAvatarService(fakeUsersRepository, fakeStorageProvider);
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });

    await expect(updateUserAvatarService.execute({
      avatarFilename: undefined,
      userId: user.id,
    })).rejects.toBeInstanceOf(AppError);
  });
});
