import path from 'path';
import fs from 'fs';
import User from '@modules/users/infra/typeorm/entities/Users';
import uploadAvatar from '@config/uploads';
import AppError from '@shared/error/AppError';
import IUsersRepository from '../Repositories/IUsersRepository';

interface IRequest {
  userId : string,
  avatarFilename: string | undefined
}

class UpdateUserAvatarService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ userId, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new Error('Only authenticated new users can change avatar ');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadAvatar.directory, user.avatar);
      const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);
      if (userAvatarFileExist) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    if (!avatarFilename) {
      throw new AppError('File name is not Exist ', 401);
    }
    user.avatar = avatarFilename;

    await this.usersRepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;
