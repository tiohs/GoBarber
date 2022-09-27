import { injectable, inject } from 'tsyringe';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/error/AppError';
import IUsersRepository from '../Repositories/IUsersRepository';

interface IRequest {
  email: string,
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (!checkUserExists) {
      throw new AppError('Users does not exist ');
    }
    this.mailProvider.sendMail(email, 'Olá mundo ');
  }
}

export default CreateUserService;
