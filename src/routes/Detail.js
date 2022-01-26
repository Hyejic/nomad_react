import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../components/MovieDetail";
export const Detail = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async() => {
    const json = await( 
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json)
    setMovie(json.data.movie)
    setLoading(true)
  }
  useEffect(() => {
    getMovie();
  }, [])
  return (
    <div>
      { loading 
        ? <MovieDetail 
            title={movie.title}
            year={movie.year}
            desc={movie.description_full}
            coverImg={movie.large_cover_image}
          />
        : <h1>Loading...</h1>
      }
    </div>

  );
}