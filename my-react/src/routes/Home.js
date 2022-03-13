import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              coverImg={movie.medium_cover_image}
              id={movie.id}
              key={movie.id}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
