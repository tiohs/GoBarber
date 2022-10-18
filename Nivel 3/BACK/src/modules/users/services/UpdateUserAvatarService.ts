import User from '@modules/users/infra/typeorm/entities/Users';
import AppError from '@shared/error/AppError';
import { injectable, inject } from 'tsyringe';
import IStorageProvider from '@shared/container/providers/StoryProvider/models/StorageProvider';
import IUsersRepository from '../Repositories/IUsersRepository';

interface IRequest {
  userId: string;
  avatarFilename: string | undefined;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ userId, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new Error('Only authenticated new users can change avatar ');
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }
    if (!avatarFilename) {
      throw new AppError('File name is not Exist ', 401);
    }
    const filename = await this.storageProvider.saveFile(avatarFilename);
    user.avatar = filename;

    await this.usersRepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;
