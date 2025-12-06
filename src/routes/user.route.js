const express = require("express");
const router = express.Router();

const userController  = require("../controllers/user.controller");

router.post("/v1/user/user-create", userController.createUserController);

router.post("/v1/user/login", userController.loginUserController);
router.post("/v1/user/admin-create", userController.createAdminController);
router.get("/v1/user/all-user", userController.getAllUsersController);
router.put("/v1/user/update/:id", userController.updateUserController);


module.exports = router;

