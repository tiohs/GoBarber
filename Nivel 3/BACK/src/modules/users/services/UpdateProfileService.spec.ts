import AppError from '@shared/error/AppError';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import UpdateProfileService from './UpdateProfileService';
import CreateUserService from './CreateUserService';

describe('UpdateUserPortfolio', () => {
  it('should be able to update user  ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const fakeHashProvider = new FakeHashProvider();
    const updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    // eslint-disable-next-line max-len

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });

    const updateUser = await updateProfileService.execute({
      userId: user.id,
      name: 'Hamilton Silva',
      email: 'johondoe1@exemple.com',
      password: '12345612',
      old_password: '123456',
    });

    expect(user.name).toBe(updateUser.name);
  });

  it('should not be able to update if email user == email existed  ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const fakeHashProvider = new FakeHashProvider();
    const updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    // eslint-disable-next-line max-len

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });
    await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe1@exemple.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        userId: user.id,
        name: 'Hamilton Silva',
        email: 'johondoe1@exemple.com',
        password: '12345612',
        old_password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to update if user there are not  ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const fakeHashProvider = new FakeHashProvider();
    const updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    // eslint-disable-next-line max-len

    await expect(
      updateProfileService.execute({
        userId: '132456678uhbj',
        name: 'Hamilton Silva',
        email: 'johondoe1@exemple.com',
        password: '12345612',
        old_password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to update if oldPassword is not digite  ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const fakeHashProvider = new FakeHashProvider();
    const updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    // eslint-disable-next-line max-len

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        userId: user.id,
        name: 'Hamilton Silva',
        email: 'johondoe1@exemple.com',
        password: '12345612',
        old_password: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to update if oldPassword and password is not digite  ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const fakeHashProvider = new FakeHashProvider();
    const updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    // eslint-disable-next-line max-len

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });
    const updateUser = await updateProfileService.execute({
      userId: user.id,
      name: 'Hamilton Silva',
      email: 'johondoe1@exemple.com',
    });

    expect(updateUser.name).toBe(user.name);
  });

  it('should not be able to update if oldPassword is not correct  ', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const fakeHashProvider = new FakeHashProvider();
    const updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    // eslint-disable-next-line max-len

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });
    const o = await updateProfileService.execute({
      userId: user.id,
      name: 'Hamilton Silva',
      email: 'johondoe1@exemple.com',
      password: '102874275',
      old_password: 'dsjhdgjsfdjd',
    });
    console.log(o);

    await expect(
      updateProfileService.execute({
        userId: user.id,
        name: 'Hamilton Silva',
        email: 'johondoe1@exemple.com',
        password: '102874275',
        old_password: 'dsjhdgjsfdjd',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
