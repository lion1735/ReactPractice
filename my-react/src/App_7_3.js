import { useEffect, useState } from "react";
// https://yts.mx/api
// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year

function App() {
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
    // .then((response) => response.json())
    // .then((json) => {
    //   setMovies(json.data.movies);
    //   setLoding(false);
    // });
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id} className="">
              <img src={movie.medium_cover_image} />
              <h2>[{movie.title}]</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li id={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
