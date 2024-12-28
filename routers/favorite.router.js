const express = require("express");
const favoriteController = require("../controllers/favorite.controller");

const favoriteRouter = express.Router();

favoriteRouter.get("/", favoriteController.getAllFavorites);
favoriteRouter.post("/", favoriteController.createFavorite);

module.exports = favoriteRouter;
