const {Router} = require("express");

const UserController = require("../controllers/UserController");

const userRoutes = Router();

const userController = new UserController();
//to create a new instance that allows to add ths information to the userRoutes.post

userRoutes.post("/", userController.create);

module.exports = userRoutes;