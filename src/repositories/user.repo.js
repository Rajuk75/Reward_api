const User = require("../models/user.model");

exports.createUserRepo = async(userData)=> {
    try {
    return await User.create(userData);
 } catch (error) {
    throw new Error(error.message) 
    }
};
