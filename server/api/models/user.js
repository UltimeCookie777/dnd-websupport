const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 100
    }
});

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        password: Joi.string().min(8).max(100).required()
    });
    return schema.validate(user);
}

const User = mongoose.model('User', userSchema);
module.exports.validate = validateUser;
module.exports.User = User;