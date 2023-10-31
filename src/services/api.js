import axios from 'axios';

const myKey = 'ca5c16e834cdc72dc821318b1c6c8c2f';
const query = '';
const movieId = '';

axios.default.baseURL = 'https://api.themoviedb.org/3';

export const fetchBestMovies = async params => {
  const { data } = await axios.get(`/trending/all/day`, {
    params: {
      ...params,
      key: myKey,
    },
  });
  return data;
};

export const fetchMoviesByQuery = async params => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      ...params,
      query: query,
    },
  });
  return data;
};

export const fetchInfoMovie = async params => {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      ...params,
      movieId: movieId,
    },
  });
  return data;
};

export const fetchCast = async params => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      ...params,
      movieId: movieId,
    },
  });
  return data;
};

export const fetchReviewsMovie = async params => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      ...params,
      movieId: movieId,
    },
  });
  return data;
};
