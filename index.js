// const express = require("express");
import express from "express";
import { sequelize } from "./config.js";
import { Movie } from "./models/movies.model.js";
import MovieRouter from "./Routes/movies.route.js";

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// const movie1 = await Movie.create({
//   name: "Leo",
//   poster:
//     "https://m.media-amazon.com/images/M/MV5BYTAzYzVlYmItMWI1Yi00ZGRjLTkwYWUtYWM3ZDIwOGFiODk4XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
//   rating: 8,
//   summary: "Leoooooooooooooooooooooooooooooooooooooooooooooo",
//   trailer: "https://youtu.be/2W2QC_1TDDA?si=vF1I1SEnUMmP2g62",
// });

const app = express();
app.use(express.json());
const PORT = 4000;

// app.put("/movies/:id", async function (request, response) {
//   // console.log(request.body);

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/movies", MovieRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
