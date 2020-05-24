import React, { useEffect, useState } from "react";
import CategoryContainer from "./CategoryContainer";
import CategoryHeader from "./CategoryHeader";

interface CategoriesProps {
  category: {
    name: string;
  };
}

const Categories: React.FC<CategoriesProps> = ({ category }) => {
  //
  // const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?api_key=2427496f4d1f13f09172c952292311dc&language=en-US&page=1";
  //  const latestMovies = "https://api.themoviedb.org/3/movie/latest?api_key=2427496f4d1f13f09172c952292311dc&language=en-US";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      let cat = category.name;
      cat = cat.toLocaleLowerCase();
      const url = `https://api.themoviedb.org/3/movie/${cat}?api_key=2427496f4d1f13f09172c952292311dc&language=en-US&page=1`;
      const res = await fetch(url);
      const { results } = await res.json();
      setMovies(results);
    };

    fetchCategory();
    //effect goes here;
  }, [category]);

  return (
    <div className={"container mx-auto py-10 " + (movies ? "" : "hidden")}>
      <CategoryHeader heading={category.name} />
      <CategoryContainer movies={movies} />
    </div>
  );
};

export default Categories;
