const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:Krgg6gKAs93O9uMU@nasacluster.qepjphz.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection open");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

mongoose.set("strictQuery", false);

async function mongoConnect() {
  console.log(`Im here`);
  await mongoose.disconnect();
  // console.log("Disconnected");
  await mongoose.connect(MONGO_URL);
  // await mongoose.connect(MONGO_URL);
  console.log("Connected and waiting");

  console.log("Connected to MongoDB");
}
async function mongoDisconnect() {
  await mongoose.connection.close();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
