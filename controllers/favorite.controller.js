const Favorite = require("../models/favorite");

async function getAllFavorites(req, res) {
    const favorites = await Favorite.find();
    res.status(200).json({
        favorites: favorites,
    });
}

async function createFavorite(req, res) {
    const favType = req.body.type;
    const favName = req.body.name;
    const favUrl = req.body.url;

    try {
        if (favType !== "movie" && favType !== "character") {
            throw new Error("Type must be either 'movie' or 'character'");
        }

        const existingFav = Favorite.findOne({ name: favName });

        if (existingFav) {
            throw new Error("Favorite already exists");
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }

    const favorite = new Favorite({
        type: favType,
        name: favName,
        url: favUrl,
    });

    try {
        await favorite.save();
        return res.status(201).json({
            message: "Favorite created",
            favorite: favorite.toObject(),
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getAllFavorites,
    createFavorite,
};
