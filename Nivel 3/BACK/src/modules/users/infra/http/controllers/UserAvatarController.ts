import { Response, Request } from 'express';
import { container } from 'tsyringe';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response) {
    const uploadAvatar = container.resolve(UpdateUserAvatarService);

    const user = await uploadAvatar.execute({
      userId: request.user.id,
      avatarFilename: request.file?.filename,
    });

    return response.json(user);
  }
}
