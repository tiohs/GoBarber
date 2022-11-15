import { Response, Request } from 'express';

import { container } from 'tsyringe';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response) {
    const userId = request.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const { name, email, id } = await showProfile.execute({ userId });

    return response.json({ id, name, email });
  }

  public async update(request: Request, response: Response) {
    const userId = request.user.id;
    const { name, email, old_password, password } = request.body;
    const updateProfile = container.resolve(UpdateProfileService);

    await updateProfile.execute({
      userId,
      name,
      email,
      password,
      old_password,
    });

    return response.json({ name, email });
  }
}
