// Libraries
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
// Components
import { MoviesIndex } from "./MoviesIndex";
import { MovieShow } from "./MovieShow";
import { Modal } from "./Modal";

export function Content() {
  const [actionMovies, setActionMovies] = useState({});
  const [adventureMovies, setAdventureMovies] = useState({});
  const [comedyMovies, setComedyMovies] = useState({});
  const [romanceMovies, setRomanceMovies] = useState({});
  const [horrorMovies, setHorrorMovies] = useState({});
  const [familyMovies, setFamilyMovies] = useState({});
  const [animationMovies, setAnimationMovies] = useState({});
  const [isMovieShowVisisble, setIsMovieShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [movieDetails, setMovieDetails] = useState({});

  const handleShowMovie = movie => {
    console.log(movie);
    setIsMovieShowVisible(true);
    setCurrentMovie(movie);

    axios
      .get(
        `http://api.themoviedb.org/3/movie/${movie.id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&&append_to_response=credits,release_dates,videos`
      )
      .then(function(response) {
        setMovieDetails(response.data);
      });
  };

  const handleClose = () => {
    setIsMovieShowVisible(false);
  };

  const handleMoviesIndex = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&with_origin_country=US&with_original_language=en`
      )
      .then(function(response) {
        setActionMovies(response.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=12&with_origin_country=US&with_original_language=en`
      )
      .then(function(response) {
        setAdventureMovies(response.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35&with_origin_country=US&with_original_language=en`
      )
      .then(function(response) {
        setComedyMovies(response.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=10749&with_origin_country=US&with_original_language=en`
      )
      .then(function(response) {
        setRomanceMovies(response.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27&with_origin_country=US&with_original_language=en`
      )
      .then(function(response) {
        setHorrorMovies(response.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=10751&with_origin_country=US&with_original_language=en`
      )
      .then(function(response) {
        setFamilyMovies(response.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=16&with_origin_country=US&with_original_language=en`
      )
      .then(function(response) {
        setAnimationMovies(response.data);
      });
  };

  useEffect(handleMoviesIndex, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MoviesIndex
              actionMovie={actionMovies}
              adventureMovie={adventureMovies}
              romanceMovie={romanceMovies}
              comedyMovie={comedyMovies}
              horrorMovie={horrorMovies}
              familyMovie={familyMovies}
              animationMovie={animationMovies}
              onShowMovie={handleShowMovie}
            />
          }
        />
      </Routes>
      <Modal show={isMovieShowVisisble} onClose={handleClose}>
        <MovieShow movie={currentMovie} movieDetails={movieDetails} />
      </Modal>
    </div>
  );
}
