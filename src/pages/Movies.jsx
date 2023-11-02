import MoviesList from 'components/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';
import styled from 'styled-components';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query);

  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await fetchMoviesByQuery({ query });
      setMovies(results);
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
  };

  const handleChange = e => {
    return setValue(e.target.value);
  };

  return (
    <MoviesStyled>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          name="query"
          value={value || ''}
          onChange={handleChange}
        />
        <ButtonStyled type="submit">Search</ButtonStyled>
      </FormStyled>
      <MoviesList films={movies} />
    </MoviesStyled>
  );
};

export default Movies;

export const InputStyled = styled.input`
  font-size: x-large;
`;

const MoviesStyled = styled.div`
  padding: 40px;
`;

const FormStyled = styled.form`
  font-size: x-large;
  display: flex;
  padding: 15px;
`;

const ButtonStyled = styled.button`
  font-size: x-large;
  padding: 8px 15px;
`;
