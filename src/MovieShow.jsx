import "./MovieShow.scoped.scss";
import ReactPlayer from "react-player/youtube";
export function MovieShow(props) {
  console.log(props);

  const movieDuration = runtime => {
    const duration = runtime / 60.0;
    const hours = Math.floor(duration);
    const minutes = Math.round(duration - hours);
    return hours + "h" + " " + minutes + "m";
  };

  return (
    <div id="movie-show">
      {props.movieDetails && props.movieDetails.videos?.results.length > 0 ? (
        <div className="center-video">
          <ReactPlayer
            className="youtube-videos"
            url={`https://www.youtube.com/embed/${props.movieDetails.videos.results[0].key}`}
            playing={true}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="row">
        <div className="col-sm-7">
          <p>
            <small>
              {props.movieDetails.release_date} | {movieDuration(props.movieDetails.runtime)}
            </small>
          </p>
          <p>
            <small>{props.movie.overview}</small>
          </p>
        </div>
        <div className="col-sm-5">
          <small>
            Genres:
            {props.movieDetails && props.movieDetails.genres?.length > 0 ? (
              props.movieDetails.genres.map(genre => <div key={genre.id}>{genre.name}</div>)
            ) : (
              <></>
            )}
          </small>
          <small>
            Cast:
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
    </div>
  );
}
