import { randomUUID as uuid } from 'crypto';
import Users from '@modules/users/infra/typeorm/entities/Users';
import IUsersRepository from '@modules/users/Repositories/IUsersRepository';
import ICreateUserDTD from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';

class UsersRepository implements IUsersRepository {
  private users: Users[] = [];

  public async findByEmail(email: string): Promise<Users | undefined> {
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }

  public async findById(id: string): Promise<Users | undefined> {
    const findUser = this.users.find(user => user.id === id);
    return findUser;
  }

  public async save(userData: Users): Promise<Users> {
    const findIndex = this.users.findIndex(
      findUser => findUser.id === userData.id,
    );

    this.users[findIndex] = userData;

    return userData;
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTD): Promise<Users> {
    const user = new Users();

    Object.assign(user, {
      id: uuid(),
      name,
      email,
      password,
    });

    this.users.push(user);
    return user;
  }

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<Users[]> {
    let { users } = this;
    if (except_user_id) {
      users = this.users.filter(user => user.id !== except_user_id);
    }
    return users;
  }
}

export default UsersRepository;
