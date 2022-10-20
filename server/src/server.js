const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

//At package.json on "scripts: {"start":" PORT=port_number node server.js"}"
//if ports needs to be specified
const PORT = process.env.PORT || 8000;

//Change password before commiting
const MONGO_URL =
  "mongodb+srv://nasa-api:Amwvc2Cz4094O6Cr@nasacluster.e6wuq5j.mongodb.net/nasa?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection open");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
  });
}

startServer();
//.....
