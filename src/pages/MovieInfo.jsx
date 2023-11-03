import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchInfoMovie } from 'services/api';
import styled from 'styled-components';

const MovieInfo = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const newLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchAboutMovie = async () => {
      const data = await fetchInfoMovie(movieId);
      setFilm(data);
    };
    fetchAboutMovie();
  }, [movieId]);

  return (
    <div>
      <GoBackStyled to={newLocation.current}>Go back</GoBackStyled>
      <div>
        <img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
              : 'https://www.drupal.org/files/project-images/broken-image.jpg'
          }
          alt={film.title}
        />
        <h1>{film.title}</h1>
        <h3>User score: {film.vote_average}</h3>
        <h3>Overview</h3>
        <p>{film.overview}</p>
        <h3>Genres</h3>
        {film.genres && (
          <p>
            {film.genres.map(el => (
              <span key={el.id}>{el.name} </span>
            ))}
          </p>
        )}
      </div>
      <InfoStyled>
        <InfoListStyled>
          <li>
            <NavLinkStyled to="cast">Cast</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
          </li>
        </InfoListStyled>
      </InfoStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieInfo;

const InfoStyled = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: solid 3px black;
`;
const InfoListStyled = styled.ul`
  font-size: large;
  padding: 24px 30px;
  border-bottom: solid 2px black;
  display: flex;
  gap: 30px;
  margin: 0;
  text-decoration: none;
  list-style: none;
`;
export const IMG = styled.img`
  aspect-ratio: 3/4;

  object-fit: cover;
`;

const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
`;
const GoBackStyled = styled(Link)`
  display: block;
  width: fit-content;
  padding: 10px 20px;
  font-size: x-large;
  font-weight: 600;
  text-decoration: none;
`;
