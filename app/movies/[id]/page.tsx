import { Suspense } from "react";
import MovieInfo from "./components/MovieInfo";
import MovieVideo from "./components/MovieVideo";

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback="Loading...">
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback="Loading...">
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
