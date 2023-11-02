import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { CastItem } from './CastItem';
import styled from 'styled-components';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    const fetchCastMovies = async () => {
      const { cast } = await fetchCast(movieId);
      setCast(cast);
    };
    fetchCastMovies();
  }, [movieId]);
  return (
    <CastStyled>
      {cast.map((actor, idx) => (
        <CastItem actor={actor} key={idx} />
      ))}
    </CastStyled>
  );
};

export default Cast;

const CastStyled = styled.ul`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 180px);
  justify-content: space-between;
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  list-style: none;
`;
