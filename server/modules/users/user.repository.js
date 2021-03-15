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
  
    var query = {"username": userName};
    const user = await User.findOne(query).exec();
    if(user){
      return user;
    }
    
    throw new NotFoundError(ENTITY_NAME);
};

const getUserById = async (id) => {
    var query = { _id: Types.ObjectId(id)};
    const user = await User.findOne(query).exec();
    if(user){
      return user;
    }
    
    throw new NotFoundError(ENTITY_NAME);
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
  getUserById,
  getUserByCodeName,
  saveUser
};
