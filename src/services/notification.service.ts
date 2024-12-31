import Notification, { INotification } from '../models/notification.model';

export const createNotification = async (data: INotification) => {
  const newNotification = new Notification(data);
  return await newNotification.save();
};

export const getNotifications = async () => {
  return await Notification.find();
};
