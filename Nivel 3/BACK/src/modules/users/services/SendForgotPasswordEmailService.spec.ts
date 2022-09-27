import AppError from '@shared/error/AppError';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeIMailProvider';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import SendForgetPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgetPasswordEmail', () => {
  it('Should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    // eslint-disable-next-line max-len
    const sendForgetPasswordEmailService = new SendForgetPasswordEmailService(fakeUsersRepository, fakeMailProvider);

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      email: 'johondoe@exemple.com',
      name: 'John Doe',
      password: '123456',
    });

    await sendForgetPasswordEmailService.execute({
      email: 'johondoe@exemple.com',
    });
    expect(sendMail).toHaveBeenCalled();
  });

  it('Should not be able to recover a non-existing user password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    // eslint-disable-next-line max-len
    const sendForgetPasswordEmailService = new SendForgetPasswordEmailService(fakeUsersRepository, fakeMailProvider);

    await expect(sendForgetPasswordEmailService.execute({
      email: 'johondoe@exemple.com',
    })).rejects.toBeInstanceOf(AppError);
  });
});
