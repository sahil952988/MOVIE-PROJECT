import { useParams } from "react-router"
import VideoCompo from "./VideoCompo";
import { useGetMovieDetailQuery } from "../../Features/movieApi";

const MovieDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetMovieDetailQuery(id);
  return (
    <div className="p-6 space-y-7">
      <h1>{data?.original_title}</h1>
      <VideoCompo id={id} />
      <p>{data?.overview}</p>
    </div>
  )
}
export default MovieDetail