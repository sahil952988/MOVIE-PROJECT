import { useVideoByIdQuery } from "../../Features/movieApi"
import ErrorPage from "../../components/ErrorPage";

const VideoCompo = ({ id }) => {
  const { isLoading, isError, error, data } = useVideoByIdQuery(id);
  if (isLoading) {
    return <h1>Loading.....</h1>
  }
  if (isError) {
    return
    <ErrorPage error={error} />
  }
  return (
    <div>
      <iframe className="w-[50%] aspect-video" src={`https://www.youtube.com/embed/${data?.results[0]?.key}`} allowFullScreen></iframe>

    </div>
  )
}
export default VideoCompo