import React from "react";
import MovieInterface from "./../../Interfaces/MovieInterface";
import "./Category.css";
interface CategoryProps {
  movies: MovieInterface[];
}
const CategoryContainer: React.FC<CategoryProps> = ({ movies }) => {
  return (
    <>
      <div className="flex justify-between ">
        {movies
          ?.filter((movie: MovieInterface) => movie.poster_path)
          .slice(0, 5)
          .map((movie: MovieInterface) => (
            <div
              className="poster-container text-center max-w-1/5"
              key={movie.id}
            >
              <div className="banner">
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
                  alt={movie.title + " Banner"}
                  className="w-full"
                />
              </div>
              <div className="description text-left">
                <div className="title">Title: {movie.title}</div>
                <div className="rating">Rating: {movie.vote_average}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CategoryContainer;
