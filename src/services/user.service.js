const userRepo = require("../repositories/user.repo")

exports.createUserService = async (data) => {
  try {
    const newuser = await userRepo.createUserRepo(data);
    return newuser;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.loginUserService = async (data) => {
  try {
    const user = await userRepo.loginUserRepo({
      email: data.email
    });
    if(!user){
      throw new Error("Invalid User")
    }
    if(data.password !== user.password){
      throw new Error("Wrong Password")
    }
    
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllUsersService = async () => {
  try {
    const users = await userRepo.getAllUsersRepo();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateUserService = async (id, data) => {
  try {
    return await userRepo.updateUserRepo(id, data);
  } catch (error) {
    throw new Error(error.message);
  }
};

