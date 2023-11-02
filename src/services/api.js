import axios from 'axios';

const myKey = 'ca5c16e834cdc72dc821318b1c6c8c2f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchBestMovies = async params => {
  const { data } = await axios.get(`/trending/all/day`, {
    params: {
      ...params,
      api_key: myKey,
    },
  });
  return data;
};

export const fetchMoviesByQuery = async params => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      ...params,
      api_key: myKey,
    },
  });
  return data;
};

export const fetchInfoMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: myKey,
    },
  });
  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: myKey,
    },
  });
  return data;
};

export const fetchReviewsMovie = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: myKey,
      page: 1,
    },
  });
  return data;
};
