const express = require("express");
const userRouter = express.Router();
const { createNewUser} = require("../controllers/user.controller");


userRouter.route("/signup").post(createNewUser);

module.exports = userRouter;