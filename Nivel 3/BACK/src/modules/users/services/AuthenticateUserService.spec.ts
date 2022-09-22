import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import AuthenticateUserService from './AuthenticateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const authenticateUserService = new AuthenticateUserService(fakeUsersRepository);
    const createUserService = new CreateUserService(fakeUsersRepository);

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
