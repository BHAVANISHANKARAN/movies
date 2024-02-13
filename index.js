// const express = require("express");
import express from "express";
import { sequelize } from "./config.js";
import { Movie } from "./models/movies.model.js";
import { UserTable } from "./models/users.model.js";
// import MovieRouter from "./Routes/movies.route.js";
import userRouter from "./Routes/users.route.js";
import bcrypt from "bcrypt";
import cors from "cors";

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// const movie1 = await UserTable.create({
//   username: "Leo",
//   password: "password",
// });

const app = express();
app.use(express.json()); // middleware
app.use(cors());
const PORT = process.env.PORT;

// app.put("/movies/:id", async function (request, response) {
//   // console.log(request.body);

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/movies", userRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
