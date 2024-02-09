import { DataTypes } from "sequelize";
import { sequelize } from "../config.js";

const Movie = sequelize.define(
  "Movie",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 10,
      },
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Movie === sequelize.models.Movie); // true

export { Movie };
