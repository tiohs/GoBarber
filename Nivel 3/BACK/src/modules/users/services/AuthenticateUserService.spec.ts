import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import AuthenticateUserService from './AuthenticateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUserService = new AuthenticateUserService(fakeUsersRepository);
    const createUserService = new CreateUserService(fakeUsersRepository, fakeHashProvider);

    await createUserService.execute({
      name: 'John Doe',
      email: 'johondoe@exemple.com',
      password: '123456',
    });

    const response = await authenticateUserService.execute({
      email: 'johondoe@exemple.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });
});
