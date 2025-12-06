const { USER_TYPE_USER, USER_TYPE_ADMIN } = require("../constant/enum");
const userService = require("../services/user.service");
const {
  setCreateSuccess,
  setServerError,
  setBadRequest,
} = require("../utility/responseHelper");

exports.createUserController = async (req, res) => {
  try {
    const { phone, name } = req.body.user;

    if (!phone || !name) {
      return setBadRequest(res, {
        message: "phone and name field are required",
      });
    }
    const userData = {
      ...req.body.user,
      userType: USER_TYPE_USER
    };
    const user = await userService.createUserService(userData);
    return setCreateSuccess(res, {
      message: "user created",
      user,
    });
  } catch (error) {
    return setServerError(res, {
      message: error.message,
    });
  }
};

exports.createAdminController = async (req, res) => {
  try {
    const { name, email } = req.body.user;

    if (!name || !email) {
      return setBadRequest(res, {
        message: "name and email fields are required",
      });
    }

    const adminData = {
      ...req.body.user,
      userType: USER_TYPE_ADMIN,
    };

    const admin = await userService.createUserService(adminData);

    return setCreateSuccess(res, {
      message: "Admin created successfully",
      data: admin,
    });
  } catch (error) {
    return setServerError(res, {
      message: error.message,
    });
  }
};

exports.loginUserController = async (req, res) => {
  try {
    const { password, email } = req.body.user;

    if (!password || !email) {
      return setBadRequest(res, {
        message: "password and email fields are required",
      });
    }

    const user = await userService.loginUserService(req.body.user);

    return setSuccess(res, {
      message: "login successful",
      user,
    });
  } catch (error) {
    return setServerError(res, {
      message: error.message,
    });
  }
};

exports.getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsersService();

    return setSuccess(res, {
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    return setServerError(res, {
      message: error.message,
    });
  }
};

exports.updateUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body.user;

    if (!userId) {
      return setBadRequest(res, {
        message: "User ID is required",
      });
    }

    if (!data) {
      return setBadRequest(res, {
        message: "user object is required in body",
      });
    }

    const updatedUser = await userService.updateUserService(userId, data);

    if (!updatedUser) {
      return setBadRequest(res, {
        message: "User not found",
      });
    }

    return setSuccess(res, {
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return setServerError(res, {
      message: error.message,
    });
  }
};
