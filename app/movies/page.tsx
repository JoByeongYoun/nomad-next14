import Link from "next/link";
import { MOVIE_URL } from "./constant";

async function getMovies() {
  const res = await fetch(MOVIE_URL);
  return res.json();
}

export default async function MovieList() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link href={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </div>
  );
}
