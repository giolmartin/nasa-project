const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:Amwvc2Cz4094O6Cr@nasacluster.e6wuq5j.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection open");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  // await mongoose.disconnect();
  await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect() {
  await mongoose.connection.close();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
