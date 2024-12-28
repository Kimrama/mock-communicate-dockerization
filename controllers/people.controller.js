const axios = require("axios");

async function getAllPeople(req, res) {
    try {
        const response = await axios.get("https://swapi.dev/api/people");
        return res.status(200).json({
            people: response.data,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = { getAllPeople };
