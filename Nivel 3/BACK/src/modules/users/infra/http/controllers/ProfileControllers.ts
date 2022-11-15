import { Response, Request } from 'express';

import { container } from 'tsyringe';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';

export default class ProfileController {
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
