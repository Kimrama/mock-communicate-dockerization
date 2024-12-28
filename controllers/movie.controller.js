const axios = require("axios");

async function getAllMovie(req, res) {
    try {
        const response = await axios.get("https://swapi.dev/api/films");
        return res.status(200).json({
            movies: response.data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = { getAllMovie };
