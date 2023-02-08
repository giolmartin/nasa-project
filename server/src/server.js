const http = require("http");

require("dotenv").config(); // security

const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { loadPlanetsData } = require("./models/planets.model");
const {loadLaunchData} =require('./models/launches.model')

//At package.json on "scripts: {"start":" PORT=port_number node server.js"}"
//if ports needs to be specified
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  console.log('Starting server ...');
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
  });
}

startServer();
//.....
