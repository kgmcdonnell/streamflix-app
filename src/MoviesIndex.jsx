import "./MoviesIndex.scoped.scss";
import { Card } from "./Card";
export function MoviesIndex(props) {
  return (
    <div className="movies-index">
      <h5>Action</h5>
      <div className="movies">
        {props.actionMovie && props.actionMovie.results?.length > 0 ? (
          props.actionMovie.results.map(movie => (
            <div key={movie.id} onClick={() => props.onShowMovie(movie)}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>

      <h5>Adventure</h5>
      <div className="movies">
        {props.adventureMovie && props.adventureMovie.results?.length > 0 ? (
          props.adventureMovie.results.map(movie => (
            <div key={movie.id} onClick={() => props.onShowMovie(movie)}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <h5>Romance</h5>
      <div className="movies">
        {props.romanceMovie && props.romanceMovie.results?.length > 0 ? (
          props.romanceMovie.results.map(movie => (
            <div key={movie.id} onClick={() => props.onShowMovie(movie)}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <h5>Comedy</h5>
      <div className="movies">
        {props.comedyMovie && props.comedyMovie.results?.length > 0 ? (
          props.comedyMovie.results.map(movie => (
            <div key={movie.id} onClick={() => props.onShowMovie(movie)}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <h5>Family Movies</h5>
      <div className="movies">
        {props.familyMovie && props.familyMovie.results?.length > 0 ? (
          props.familyMovie.results.map(movie => (
            <div key={movie.id} onClick={() => props.onShowMovie(movie)}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <h5>Animation</h5>
      <div className="movies">
        {props.animationMovie && props.animationMovie.results?.length > 0 ? (
          props.animationMovie.results.map(movie => (
            <div key={movie.id} onClick={() => props.onShowMovie(movie)}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <h5>Horror</h5>
      <div className="movies">
        {props.horrorMovie && props.horrorMovie.results?.length > 0 ? (
          props.horrorMovie.results.map(movie => (
            <div key={movie.id} onClick={() => props.onShowMovie(movie)}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
