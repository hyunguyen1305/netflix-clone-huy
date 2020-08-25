import axiosClient from "./axiosClient";

const apiKey = "c14508a36a79a0f7ecc288dd6c92182f";

const links = {
  trending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  netflixMovies: `/discover/movie?api_key=${apiKey}&with_networks=213`,
  netflixTVShow: `/discover/tv?api_key=${apiKey}&with_networks=213`,
};

const moviesApi = {
  getTrending: () => {
    return axiosClient.get(links.trending);
  },
};

export default moviesApi;
