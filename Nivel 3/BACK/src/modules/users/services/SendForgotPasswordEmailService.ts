import { injectable, inject } from 'tsyringe';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/error/AppError';
import IUsersRepository from '../Repositories/IUsersRepository';
import IUserTokensRepository from '../Repositories/IUserTokensRepository';

interface IRequest {
  email: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider,
    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Users does not exist ');
    }
    console.log('Ola mundo ');
    await this.userTokensRepository.generate(user.id);

    await this.mailProvider.sendMail(email, 'Olá mundo ');
    console.log('aqui');
  }
}

export default CreateUserService;
