const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    features: [String],
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Property', propertySchema);
