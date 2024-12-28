const express = require("express");
const peopleController = require("../controllers/people.controller");

const peopleRouter = express.Router();

peopleRouter.get("/", peopleController.getAllPeople);

module.exports = peopleRouter;
