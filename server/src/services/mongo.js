const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection open');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

mongoose.set('strictQuery', false);

async function mongoConnect() {
  // await mongoDisconnect();
  console.log(`Im here`);

  // console.log("Disconnected");
  await mongoose.connect(MONGO_URL);
  // await mongoose.connect(MONGO_URL);
  console.log('Connected and waiting');

  console.log('Connected to MongoDB');
}

async function mongoDisconnect() {
  await mongoose.connection.close();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
