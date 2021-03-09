const userService = require("../modules/users/user.service");
const { BadRequestError } = require('../common/errors/errors-list');

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try{
    const user = await userService.getUserByCodeName(req.body.username);
    if (user) {
      throw res.status(400).send({message: "Failed! Username is already in use!"});
    }

    next();

  }catch(error){
    throw new BadRequestError(error)
  }
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;