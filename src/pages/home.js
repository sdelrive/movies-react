import React from "react";
import useFetch from "../hooks/useFetch";

export default function home() {
  const movies = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=c240615e3f07215587640c5cb306a0a0&language=es-ES&page=1"
  );

  console.log(movies);
  console.log("al");
  return (
    <div>
      <h1>GOLAAA</h1>
    </div>
  );
}
