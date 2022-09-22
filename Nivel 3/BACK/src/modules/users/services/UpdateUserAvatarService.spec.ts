import FakeStorageProvider from '@shared/container/providers/StoryProvider/Fakes/FakeStorageProvider';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('CreateUsers', () => {
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
});
