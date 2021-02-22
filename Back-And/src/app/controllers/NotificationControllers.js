import Notification from '../schemas/Notification';

class NotificationControllers {
  async index() {
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only appointments can load notifications ' });
    }
    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort('createdAt')
      .limit(20);

    res.json(notifications);
  }
}

export default new NotificationControllers();
