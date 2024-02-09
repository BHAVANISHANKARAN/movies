import express from "express";
// import { Movie } from "../movies.js";
import moviesController from "../controllers/movies.controller.js";

const router = express.Router();

router
  .route("/")
  .get(moviesController.getAllMovies)
  .post(moviesController.createMovie);

router
  .route("/:id")
  .get(moviesController.getMovieByID)
  .delete(moviesController.deleteMovieByID)
  .put(moviesController.updateMovieByID);

export default router;
