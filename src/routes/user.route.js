const express = require("express");
const router = express.Router();

const userController  = require("../controllers/user.controller");

router.post("/v1/user/user-create", userController.createUserController);


module.exports = router;

