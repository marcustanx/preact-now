// const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(db, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const connectDB = async () => {
  try {
    await MongoClient.connect(
      db,
      { useNewUrlParser: true }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       db,
//       { useNewUrlParser: true }
//     );

//     console.log('MongoDB is Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


