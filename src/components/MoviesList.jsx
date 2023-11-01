import { useLocation } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { NavLinkStyled } from './Layout';

const MoviesList = ({ films }) => {
  let location = useLocation();
  return (
    <ListMovies>
      {films?.map(film => (
        <ListItem key={film.id}>
          <NavLinkStyled state={{ from: location }} to={`/movies/${film.id}`}>
            {film.name || film.title}
          </NavLinkStyled>
        </ListItem>
      ))}
    </ListMovies>
  );
};

export default MoviesList;

const ListMovies = styled.ol`
  font-size: calc((1vw + 1vh) * 1.2);
  font-weight: 600;
`;
const ListItem = styled.li`
  padding: calc((1vw + 1vh) * 0.2) calc((1vw + 1vh));
`;
