import { useNavigate, useParams } from "react-router";
import { useMovieByPageQuery } from "../../Features/movieApi";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/ErrorPage";
import { Image, Shimmer } from "react-shimmer";



const MoviePage = () => {
  const { query } = useParams();
  const nav = useNavigate()


  const { isLoading, isError, error, data } = useMovieByPageQuery
    (query);
  if (isLoading) {
    return
    <Loading />
  }
  if (isError) {
    return
    <ErrorPage error={error} />
  }
  return (
    <div className='grid grid-cols-3 p-5 gap-5'>
      {data && data.results.map((movie) => {
        return <div key={movie.id} className="cursor-pointer" onClick={() => nav(`/movie/detail/${movie.id}`)}>

          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            fallback={<Shimmer width={300} height={350} />}
          />

          <h1>{movie.overview.substring(0, 100) + '....'}</h1>
        </div>
      })}

    </div>
  )
}
export default MoviePage