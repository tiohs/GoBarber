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
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}
