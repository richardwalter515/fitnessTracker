const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiroutes = require("./Develop/routes/apiRoutes");
const htmlroutes = require("./Develop/routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

const User = require("./Develop/models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use("/api", apiroutes);
app.use("/", htmlroutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});