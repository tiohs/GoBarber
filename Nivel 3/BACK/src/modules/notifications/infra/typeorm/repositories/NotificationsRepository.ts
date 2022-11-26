import { getMongoRepository, MongoRepository } from 'typeorm';
import ICreateNotificationDTO from '../../../dtos/ICreateNotificationDTO';
import INotification from '../../../repositories/INotificationsRepository';
import Notification from '../schemas/Notification';

class NotificationsRepository implements INotification {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      recipient_id,
      content,
    });
    await this.ormRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepository;
