import { getRepository, Repository } from 'typeorm';
import Users from '@modules/users/infra/typeorm/entities/Users';
import IUsersRepository from '@modules/users/Repositories/IUsersRepository';
import ICreateUserDTD from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });
    return user;
  }

  public async findById(id: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  public async save(user: Users): Promise<Users> {
    return this.ormRepository.save(user);
  }

  public async create({ name, email, password }: ICreateUserDTD): Promise<Users> {
    const user = this.ormRepository.create({ name, email, password });
    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
