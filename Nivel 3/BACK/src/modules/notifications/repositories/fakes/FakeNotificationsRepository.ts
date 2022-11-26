import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import INotification from '@modules/notifications/repositories/INotificationsRepository';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';
import { ObjectId } from 'mongodb';

class FakeNotificationsRepository implements INotification {
  private Notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();
    Object.assign(notification, {
      id: new ObjectId(),
      content,
      recipient_id,
    });
    this.Notifications.push(notification);
    return notification;
  }
}

export default FakeNotificationsRepository;
