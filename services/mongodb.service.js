const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
    console.log("mongodb connection ready");
});

mongoose.connection.on("error", (err) => {
    console.log("mongodb connection error:", err);
});

async function mongodbConnect() {
    try {
        console.log("connecting to mongodb");
        await mongoose.connect("mongodb://localhost:27017/swfavorites");
        console.log("mongodb is connected");
    } catch (error) {
        throw new Error("something went wrong connecting to mongodb");
    }
}

async function mongodbDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongodbConnect,
    mongodbDisconnect,
};
