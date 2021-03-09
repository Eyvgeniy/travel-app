const User = require('./user.schema');
const { NotFoundError, BadRequestError } = require('../../common/errors/errors-list');
const { ENTITY_NAME, USER_NAME_FIELD } = require('./constants');
const { Types } = require('mongoose');


const updateImageByUserName = async (userName, image) => {
    var query = { 'username': userName};

    User.findOneAndUpdate(query, {$set: {
      "image.data": image.data,
      "image.contentType": image.contentType
    }}, {upsert: false}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
};

const getUserByCodeName = async (userName) => {
  try{
    var query = {"username": userName};
    const user = await User.findOne(query).exec();
    return user;
  }catch (error){
    throw new BadRequestError(error)
  }
};

const saveUser = async (userName, passwordHash) => {
  const user = new User({
    username: userName,
    password: passwordHash
  });

  return user.save()
}

module.exports = {
  updateImageByUserName,
  getUserByCodeName,
  saveUser
};
