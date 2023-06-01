import "./MovieShow.scoped.scss";
export function MovieShow(props) {
  console.log(props);
  return (
    <div id="movie-show">
      {/* Movie Title */}
      <h3>{props.movie.original_title}</h3>
      {/* Movie Overview */}
      <p>
        <small>{props.movie.overview}</small>
      </p>
      {/* Release Date */}
      <p>
        <small>Release Date: {props.movieDetails.release_date}</small>
      </p>
      {/* Genres */}
      <small>
        Genres:
        {props.movieDetails && props.movieDetails.genres?.length > 0 ? (
          props.movieDetails.genres.map(genre => (
            <div key={genre.id}>
              <p style={{ margin: "0" }}>{genre.name}</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </small>
      <div style={{ marginTop: "10px" }}>
        <small>
          Cast:
          {/* Cast */}
          {props.movieDetails && props.movieDetails.credits?.cast.length > 0 ? (
            props.movieDetails.credits.cast.slice(0, 6).map(member => (
              <div key={member.id}>
                <p style={{ margin: "0" }}>{member.name}</p>
              </div>
            ))
          ) : (
            <></>
          )}
        </small>
      </div>
    </div>
  );
}
