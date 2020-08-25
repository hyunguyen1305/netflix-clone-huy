import React, { useEffect } from "react";
import moviesApi from "../api/moviesApi";
import styled from "styled-components";

function ListMovies({ title }) {
  useEffect(() => {
    const getTrending = async () => {
      const res = await moviesApi.getTrending();
      console.log(res);
    };
    getTrending();
  }, []);
  return (
    <ListMoviesWrapper>
      <h2>{title}</h2>
      <div>
        <h2>List Here</h2>
      </div>
    </ListMoviesWrapper>
  );
}

const ListMoviesWrapper = styled.div``;

export default ListMovies;
