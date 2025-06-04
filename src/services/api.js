const API_KEY = "6d3999f6d881d16b00b78ddf8f0deffc";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data.results; // TMDB returns movies in the 'results' array
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    console.log(data);
    return data.results; // Consistent with getPopularMovies
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};