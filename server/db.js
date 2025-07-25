require('dotenv').config();

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async (retryCount) => {
  const MAX_RETRIES = 3;
  const count = retryCount ?? 0;
  try {
    if (!mongoURI) throw new Error('MONGO_URI is not defined');
    await mongoose.connect(mongoURI, { dbName: 'stayhealthybeta1' });
    console.info('Connected to Mongo Successfully');
    return;
  } catch (error) {
    console.error('MongoDB connection error:', error);

    const nextRetryCount = count + 1;
    if (nextRetryCount >= MAX_RETRIES) {
      throw new Error('Unable to connect to Mongo!');
    }

    console.info(`Retrying, retry count: ${nextRetryCount}`);

    return await connectToMongo(nextRetryCount);
  }
};

module.exports = connectToMongo;
