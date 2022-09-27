import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import IUserTokensRepository from '@modules/users/Repositories/IUserTokensRepository';

class FakeUserTokensRepository implements IUserTokensRepository {
  private usersToken: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: Math.random().toString().slice(2),
      token: Math.random().toString().slice(2),
      user_id,
    });

    return userToken;
  }
}

export default FakeUserTokensRepository;
