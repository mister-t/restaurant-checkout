import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log(`MONGODB_URI=${process.env.MONGODB_URI}`)
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`connected to database: ${conn.connection.host}`.bgGreen.underline);
  } catch (err) {
    console.log(`DB connection error: ${err.message}`.bgRed.underline);
    process.exit(1);
  }
};

export default connectDB;