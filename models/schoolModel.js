const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    street: {
        type: String
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    lga: {
        type: String
    },

    bio: {
        type: String,
    },
    role: {
        type: String,
        default: 'school',
        enum: ['student', 'school', 'admin']
    },
    website: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    instagram: {
        type: String
    },
    linkedin: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: Date
    }
})

module.exports = {
    School: mongoose.model('school', schoolSchema)
};