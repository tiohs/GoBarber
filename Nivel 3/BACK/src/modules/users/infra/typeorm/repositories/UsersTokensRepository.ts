import { getRepository, Repository } from 'typeorm';

import IUsersTokensRepository from '@modules/users/Repositories/IUserTokensRepository';

import UserToken from '../entities/UserToken';

class UsersTokensRepository implements IUsersTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.ormRepository.create({
      user_id,
    });

    const result = await this.ormRepository.save(userToken);
    console.log(result);
    return userToken;
  }
}

export default UsersTokensRepository;
