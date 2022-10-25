import React from "react";
import useFetch from "../hooks/useFetch";
//ANT DESIGN
import { Row, Col } from "antd";
import { API, URL_API } from "../utils/constants";
//Componentes
import SliderMovies from "../components/SliderMovies/SliderMovies";
import MovieList from "../components/MovieList/MovieList";

export default function Home() {
  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  console.log();
  return (
    <div>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList movies={popularMovies} title="Peliculas Populares" />
        </Col>
        <Col span={12}>...</Col>
      </Row>
      <h1>GOLAAA</h1>
    </div>
  );
}
