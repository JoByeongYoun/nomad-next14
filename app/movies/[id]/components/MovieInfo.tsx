import { MOVIE_URL } from "../../constant";

const getMovieInfo = async (id: string) => {
  const res = await fetch(`${MOVIE_URL}/${id}`);
  return res.json();
};
export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);
  return <h6>{JSON.stringify(movieInfo)}</h6>;
}
