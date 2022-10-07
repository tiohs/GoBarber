import { Response, Request } from 'express';

import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UserController {
  public async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createUser = container.resolve(CreateUserService);

    await createUser.execute({
      name,
      email,
      password,
    });
    return response.json({ name, email });
  }
}
