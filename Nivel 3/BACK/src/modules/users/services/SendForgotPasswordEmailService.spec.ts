import AppError from '@shared/error/AppError';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeIMailProvider';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import SendForgetPasswordEmailService from './SendForgotPasswordEmailService';
import FakeUserTokenRepository from '../Repositories/fakes/FakeUsersTokenRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokenRepository: FakeUserTokenRepository;
let fakeMailProvider: FakeMailProvider;
let sendForgetPasswordEmailService: SendForgetPasswordEmailService;

describe('SendForgetPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokenRepository = new FakeUserTokenRepository();
    // eslint-disable-next-line max-len
    sendForgetPasswordEmailService = new SendForgetPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokenRepository,
    );
  });
  it('Should be able to recover the password using the email', async () => {
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
    await expect(sendForgetPasswordEmailService.execute({
      email: 'johondoe@exemple.com',
    })).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to generate key for user', async () => {
    const UserToken = jest.spyOn(fakeUserTokenRepository, 'generate');

    const user = await fakeUsersRepository.create({
      email: 'johondoe@exemple.com',
      name: 'John Doe',
      password: '123456',
    });
    await sendForgetPasswordEmailService.execute({ email: 'johondoe@exemple.com' });
    await expect(UserToken).toBeCalledWith(user.id);
  });
});
