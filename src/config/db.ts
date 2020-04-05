import mongoose from 'mongoose';

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Connection to the database failed: ' + error.message);
    process.exit(1);
  }
};
