const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['house', 'apartment', 'commercial'], required: true },
  features: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['available', 'sold', 'rented'], default: 'available' }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
