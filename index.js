const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

//to be able to use dotenv library
dotenv.config();

//to connenct to db server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

//allow the app to read json requests
app.use(express.json());

//get rest api request by useing the end point
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

//listen to the server
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is listening");
});
