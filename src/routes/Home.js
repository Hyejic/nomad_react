import { useEffect, useState } from 'react';
import { Movie } from '../components/Movie';

export const Home = () => {
  const [loading, setLoading] = useState(true) // API data loading state
  const [movies, setMovies] = useState([]) // API data array
  const getMoives = async() => {
    const json = await (
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
    ).json();
    setMovies(json.data.movies)
    setLoading(false)
  }
  // API 데이터는 한번만 받아올것. -> useEffect no dipendencies
  useEffect(() => {
    getMoives()
  },[])

  return (
    <div>
      {loading
        ? <h1>Loading...</h1>
        : <ul>
          {movies.map((movie) => 
            <Movie 
              key={movie.id}
              id={movie.id}
              title={movie.title} 
              coverImage={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          )}
        </ul>
      }
    </div>
  );
}