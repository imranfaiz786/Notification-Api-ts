import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Notification model
export interface INotification extends Document {
  reminderMessage: string;
  invitationRequest: string;
  name: string;
  date: Date;
  time: string;
  message: string;
  details: string;
  action: string;
}

// Define the schema for the Notification model
const NotificationSchema: Schema = new Schema<INotification>({
  reminderMessage: { type: String, required: true },
  invitationRequest: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  message: { type: String, required: true },
  details: { type: String, required: true },
  action: { type: String, required: true }
});

// Create and export the Notification model
const Notification = mongoose.model<INotification>('Notification', NotificationSchema);

export default Notification;
