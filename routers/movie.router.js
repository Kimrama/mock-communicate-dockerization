const express = require("express");
const movieController = require("../controllers/movie.controller");

const movieRouter = express.Router();

movieRouter.get("/", movieController.getAllMovie);

module.exports = movieRouter;
