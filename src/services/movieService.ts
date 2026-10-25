import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const url = "https://api.themoviedb.org/3/search/movie";
  const params = { query };
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  };
  const res = await axios.get<MoviesResponse>(url, { params, headers });
  return res.data.results;
};
