import { Router, Request, Response, NextFunction } from 'express';  // Import necessary types
import { addNotification, fetchNotifications } from '../controllers/notification.controller';

// Define the asyncHandler function
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void | Response>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);  // Pass errors to the next middleware
};

const router = Router();

// Define route for adding a new notification with asyncHandler
router.post('/add', asyncHandler(addNotification));

// Define route for fetching a single notification by ID with asyncHandler
router.get('/:id', asyncHandler(fetchNotifications));

export default router;
