const { BadRequestError } = require('../../common/errors/errors-list');
const userRepo = require('./user.repository');
const config = require("../../common/auth.config.js");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const uploadImage = async (userName, image) => {
  await userRepo.updateImageByUserName(userName, image);
};

const getUserByCodeName = (userName) => {
  return userRepo.getUserByCodeName(userName);
};

const getUserById = (id) => {
  return userRepo.getUserById(id);
};

const signUp = async (userName, password, profileImg) => {
  try{
    await userRepo.saveUser(userName, bcrypt.hashSync(password, 8), profileImg);

  }catch (error){
    throw new BadRequestError(error)
  }
};

const signIn = async (userName, password) => {

    const user = await userRepo.getUserByCodeName(userName);
    if(!user){
      throw new BadRequestError("Can not find such user")
    }
    var passwordIsValid = bcrypt.compareSync(
      password,
      user.password
    );

    if (!passwordIsValid) {
      return {
        accessToken: null,
        message: "Invalid Password!"
      };
    }

    var token = jwt.sign({ id: user.id, userName: user.username }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    return {
      id: user._id,
      username: user.username,
      accessToken: token,
      message: null,
      image: user.image?.contentType
    };
};

const checkValidity = async (token) => {
  try {
    let decoded = jwt.verify(token, config.secret);
    console.log(decoded);
    let user = await userRepo.getUserById(decoded.id);
    console.log(user);
    let newToken = jwt.sign({ id: user.id, userName: user.username }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    return {
      id: user._id,
      username: user.username,
      accessToken: newToken,
      message: null
    };
  } catch(err) {
    
    console.log(err);
    return null;
  }
};

module.exports = {
    uploadImage,
    getUserByCodeName,
    getUserById,
    signUp,
    signIn,
    checkValidity
};