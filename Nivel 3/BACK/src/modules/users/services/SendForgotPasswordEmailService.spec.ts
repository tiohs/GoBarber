// import AppError from '@shared/error/AppError';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeIMailProvider';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import SendForgetPasswordEmailService from './SendForgotPasswordEmailService';

describe('CreateUsers', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    // eslint-disable-next-line max-len
    const sendForgetPasswordEmailService = new SendForgetPasswordEmailService(fakeUsersRepository, fakeMailProvider);

    await fakeUsersRepository.create({
      email: 'johondoe@exemple.com',
      name: 'John Doe',
      password: '123456',
    });

    const user = await sendForgetPasswordEmailService.execute({
      email: 'johondoe@exemple.com',
    });
    expect(user).toHaveProperty('id');
  });
});
