import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const { id } = useParams(); //App.js에서 보낸 id라는 변수명만 받아오기
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoding(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {/* {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>제목을 누르면 돌아갑니다.</h1>
          {movies.map((movie) => (
            <Movie
              coverImg={movie.large_cover_image}
              id={movie.id}
              key={movie.id}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )} */}
    </div>
  );
}
export default Detail;
