const  userService = require("../services/user.service");
const { setCreateSuccess, setServerError, setBadRequest } = require("../utility/responseHelper");

exports.createUserController = async (req, res) => {
  try {
    const {phone,name} = req.body.user

    if(!phone || !name){
      return setBadRequest(res, {
        message: "phone and name field are required"
      })
    }
    const user = await userService.createUserService(req.body.user);
    return setCreateSuccess(res, {
      message:"user created",
      user
    })
      
  } catch (error) {
    return setServerError(res, {
      message: error.message,
    })
  }
};
