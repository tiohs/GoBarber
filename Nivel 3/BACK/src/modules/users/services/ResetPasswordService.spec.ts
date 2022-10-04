import AppError from '@shared/error/AppError';
import FakeUsersRepository from '../Repositories/fakes/FakeUsersRepository';
import ResetPasswordService from './ResetPasswordService';
import FakeUserTokenRepository from '../Repositories/fakes/FakeUsersTokenRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokenRepository: FakeUserTokenRepository;
let fakeHashProvider: FakeHashProvider;
let resetPasswordService: ResetPasswordService;

describe('ResetPassword', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokenRepository = new FakeUserTokenRepository();
    fakeHashProvider = new FakeHashProvider();
    resetPasswordService = new ResetPasswordService(
      fakeUsersRepository,
      fakeUserTokenRepository,
      fakeHashProvider,
    );
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
  it('Should be able to reset the password', async () => {
    const user = await fakeUsersRepository.create({
      email: 'johondoe@exemple.com',
      name: 'John Doe',
      password: '123456',
    });
    const { token } = await fakeUserTokenRepository.generate(user.id);

    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');
    await resetPasswordService.execute({ token, password: '123123' });
    const updatedUser = await fakeUsersRepository.findById(user.id);

    expect(generateHash).toHaveBeenCalledWith('123123');
    expect(updatedUser?.password).toBe('123123');
  });
  it('Should not be able to reset the password if TokenUser not exist', async () => {
    await expect(resetPasswordService.execute({
      token: '1687139',
      password: '123123',
    })).rejects.toBeInstanceOf(AppError);
  });
  it('Should not be able to reset the password if user not exist', async () => {
    const { token } = await fakeUserTokenRepository.generate('12396129e8jds72n');

    await expect(resetPasswordService.execute({
      token,
      password: '123123',
    })).rejects.toBeInstanceOf(AppError);
  });
});
