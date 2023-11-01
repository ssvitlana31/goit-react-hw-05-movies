import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { fetchBestMovies } from 'services/api';
import styled from 'styled-components';

const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await fetchBestMovies();
      setBestMovies(results);
    };
    fetchMovies();
  }, []);

  return (
    <HomeStyled>
      <h1>Trending today</h1>
      <MoviesList films={bestMovies} />
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  padding: 40px;
`;
