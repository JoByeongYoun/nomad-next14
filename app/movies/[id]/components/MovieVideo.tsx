import { MOVIE_URL } from "../../constant";

const getMovieVideo = async (id: string) => {
  const res = await fetch(`${MOVIE_URL}/${id}/videos`);
  return res.json();
};
export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getMovieVideo(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
