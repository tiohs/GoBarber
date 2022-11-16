import { injectable, inject } from 'tsyringe';

import AppError from '@shared/error/AppError';

import IUsersRepository from '@modules/users/Repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/Users';

interface IRequest {
  userId: string;
}

@injectable()
export default class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ userId }: IRequest): Promise<User> {
    const users = await this.usersRepository.findById(userId);

    if (!users) {
      throw new AppError('User not found.');
    }

    return users;
  }
}
