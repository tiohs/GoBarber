import { injectable, inject } from 'tsyringe';

import AppError from '@shared/error/AppError';

import IUsersRepository from '@modules/users/Repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/Users';

interface IRequest {
  userId: string;
}

@injectable()
export default class ListProviderServices {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ userId }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAllProviders({
      except_user_id: userId,
    });

    if (!users) {
      throw new AppError('Not Exist User .');
    }

    return users;
  }
}
