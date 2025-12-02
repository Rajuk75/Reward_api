const userRepo = require("../repositories/user.repo")

exports.createUserService = async (data) => {
  try {
    const newuser = await userRepo.createUserRepo(data);
    return newuser;
  } catch (error) {
    throw new Error(error.message);
  }
};