const { Schema, model } = require('mongoose');

const userShema = new Schema({
    username: String,
    password: String,
    image: {
        data: Buffer,
        contentType: String
    }
});

const User = model('User', userShema);

module.exports = User; 