import React from "react";
import "./MovieList.scss";

import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

import { RightOutlined } from "@ant-design/icons";

export default function MovieList({ movies, title }) {
  if (movies.loading == true || movies.result == null) {
    return <Loading />;
  }
  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
}

function RenderMovie(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shpe="cirlce" icon={<RightOutlined />} />
      </Link>
    </List.Item>
  );
}
