import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Detail() {
  const { id } = useParams(); //App.js에서 보낸 id라는 변수명만 받아오기
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
