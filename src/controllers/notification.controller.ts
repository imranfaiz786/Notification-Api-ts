import { Request, Response } from 'express';
import { createNotification, getNotifications } from '../services/notification.service';

export const addNotification = async (req: Request, res: Response) => {
  try {
    const notification = await createNotification(req.body);
    res.status(201).json({ success: true, data: notification });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding notification', error });
  }
};

export const fetchNotifications = async (_: Request, res: Response) => {
  try {
    const notifications = await getNotifications();
    res.status(200).json({ success: true, data: notifications });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching notifications', error });
  }
};
