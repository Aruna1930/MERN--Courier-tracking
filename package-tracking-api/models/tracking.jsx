import { Schema, model } from 'mongoose';

const trackingSchema = new Schema({
  trackingNumber: String,
  status: String,
  location: String
});

export default model('tracking', trackingSchema);
