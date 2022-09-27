// import AppError from '@shared/error/AppError';

import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import ResetPasswordService from './ResetPasswordService';
import FakeUserTokenRepository from '../Repositories/fakes/FakeUsersTokenRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokenRepository: FakeUserTokenRepository;

let resetPasswordService: ResetPasswordService;

describe('ResetPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokenRepository = new FakeUserTokenRepository();
    // eslint-disable-next-line max-len
    resetPasswordService = new ResetPasswordService(fakeUsersRepository, fakeUserTokenRepository);
  });
  it('Should be able to reset the password', async () => {
    const user = await fakeUsersRepository.create({
      email: 'johondoe@exemple.com',
      name: 'John Doe',
      password: '123456',
    });
    const { token } = await fakeUserTokenRepository.generate(user.id);

    await resetPasswordService.execute({ token, password: '123123' });

    const updatedUser = await fakeUsersRepository.findById(user.id);
    expect(updatedUser?.password).toBe('123123');
  });
});
