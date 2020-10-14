import mongoose from "mongoose";
export default () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};