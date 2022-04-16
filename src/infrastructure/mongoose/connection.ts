import mongoose from "mongoose";

export const connectDB = async (stage: string) => {
  let url = process.env.MONGO_URL;

//   if (stage === "prod") {
//     url = process.env.MONGO_URL;
//   } else if (stage === "test") {
//     url = process.env.MONGO_TEST;
//   } else if (stage === "dev") {
//     url = process.env.MONGO_DEV;
//   }

  try {
    await mongoose.connect(url || "mongodb://localhost:27017/zowler_ctrl", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(
      "DB Connected in",
      process.env.NODE_ENV,
      mongoose.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export const clearDB = async () => {
  const { collections } = mongoose.connection;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};

export const closeDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
};
