import axiosClient from "./axiosClient";

const moviesApi = {
  getAll: () => {
    return axiosClient.get("/getposts");
  },
};

export default moviesApi;
