import AppError from '@shared/error/AppError';
import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/error/AppError';
import IUsersRepository from '../Repositories/IUsersRepository';
import IUserTokensRepository from '../Repositories/IUserTokensRepository';

interface IRequest {
  password: string,
  token: string
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token not exist');
    }
    const user = await this.usersRepository.findById(userToken.user_id);
    if (!user) {
      throw new AppError('User does not exist');
    }

    user.password = password;

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
