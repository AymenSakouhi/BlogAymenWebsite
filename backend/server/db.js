import mongoose from "mongoose";

const connectToDb = (cb) => {
  cb();
  mongoose.set("strictQuery", true);
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@website-blog.k8gkmef.mongodb.net/website-blog?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected successfuly");
    })
    .catch((error) => {
      console.log("connection has an error -->", error);
    });
};

export { connectToDb };
