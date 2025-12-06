const User = require("../models/user.model");

exports.createUserRepo = async(userData)=> {
    try {
    return await User.create(userData);
 } catch (error) {
    throw new Error(error.message) 
    }
};

exports.loginUserRepo = async ( email ) => {
  try {
    const user = await User.findOne( email );
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllUsersRepo = async () => {
  try {
    return await User.find({ isDeleted: false }); 
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateUserRepo = async (id, data) => {
  try {
    return await User.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

