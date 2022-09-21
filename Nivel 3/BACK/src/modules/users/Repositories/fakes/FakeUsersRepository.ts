import Users from '@modules/users/infra/typeorm/entities/Users';
import IUsersRepository from '@modules/users/Repositories/IUsersRepository';
import ICreateUserDTD from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private users: Users[] = [];

  public async findByEmail(email: string): Promise<Users | undefined> {
    const findUser = this.users.find((user) => user.email === email);
    return findUser;
  }

  public async findById(id: string): Promise<Users | undefined> {
    const findUser = this.users.find((user) => user.id === id);
    return findUser;
  }

  public async save(userData: Users): Promise<Users> {
    const findIndex = this.users.findIndex((findUser) => findUser.id === userData.id);

    this.users[findIndex] = userData;

    return userData;
  }

  public async create(userData: ICreateUserDTD): Promise<Users> {
    const user = new Users();

    Object.assign(user, { id: Math.random().toString().slice(2), userData });

    this.users.push(user);
    return user;
  }
}

export default UsersRepository;
