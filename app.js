const express = require("express");
const bodyParser = require("body-parser");

const favoriteRouter = require("./routers/favorite.router");
const movieRouter = require("./routers/movie.router");
const peopleRouter = require("./routers/people.router");

const { mongodbConnect } = require("./services/mongodb.service");

const app = express();

app.use(bodyParser.json());

app.use("/favorites", favoriteRouter);
app.use("/movies", movieRouter);
app.use("/people", peopleRouter);

async function runServer() {
    try {
        await mongodbConnect();
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Error starting server: ", error);
    }
}

runServer();
