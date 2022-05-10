import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import User from '@modules/users/infra/typeorm/entities/Users';
import uploadAvatar from '@config/uploads';
import AppError from '@shared/error/AppError';

interface IRequest {
  userId : string,
  avatarFilename: string | undefined
}

class UpdateUserAvatarService {
  public async execute({ userId, avatarFilename }: IRequest): Promise<User> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(userId);

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

    await userRepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;
