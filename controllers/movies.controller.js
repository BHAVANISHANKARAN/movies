import { Movie } from "../models/movies.model.js";
import moviesService from "../services/movies.service.js";

async function getAllMovies(request, response) {
  var ans = await moviesService.getAllMoviesQuery();
  response.send(ans);
}

async function createMovie(request, response) {
  console.log(request.body);

  const { name, poster, rating, summary, trailer } = request.body;

  var insertedValue = await moviesService.createMovieQuery(
    name,
    poster,
    rating,
    summary,
    trailer
  );

  response.send(insertedValue);
  //   response.send();
}

async function getMovieByID(request, response) {
  //   console.log(request.params.id);
  const { id } = request.params;
  var ans = await moviesService.getMovieByIDQuery(id);
  response.send(ans);
}

async function deleteMovieByID(request, response) {
  // console.log(request.params.id);
  const { id } = request.params;
  const msg = { msg: "not found" };
  var ans = await moviesService.deleteMovieByIDQuery(id);
  ans ? response.send(ans) : response.status(404).send(msg);
}

async function updateMovieByID(request, response) {
  const { id } = request.params;
  const ans = request.body;
  var ans1 = await updateMovieByIDQuery(ans, id);
  const NOT_FOUND_MSG = { msg: "ID not found" };
  ans1 ? response.send(ans1) : response.status(404).send(NOT_FOUND_MSG);
}

export default {
  getAllMovies,
  createMovie,
  getMovieByID,
  deleteMovieByID,
  updateMovieByID,
};
