import { Movie } from "../models/movies.model.js";

async function getAllMoviesQuery() {
  return await Movie.findAll();
}

async function createMovieQuery(name, poster, rating, summary, trailer) {
  return await Movie.create({
    name,
    poster,
    rating,
    summary,
    trailer,
  });
}

async function getMovieByIDQuery(id) {
  return await Movie.findOne({
    where: {
      id: id,
    },
  });
}

async function deleteMovieByIDQuery(id) {
  return await Movie.destroy({
    where: {
      id: id,
    },
  });
}

async function updateMovieByIDQuery(ans, id) {
  return await Movie.update(ans, {
    where: {
      id: id,
    },
  });
}

export default {
  getAllMoviesQuery,
  createMovieQuery,
  getMovieByIDQuery,
  deleteMovieByIDQuery,
  updateMovieByIDQuery,
};
