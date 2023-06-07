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
        <div className="col-sm-6">
          <p>
            <small>
              {props.movieDetails.release_date} | {movieDuration(props.movieDetails.runtime)}
            </small>
          </p>
          <p>
            <small>{props.movie.overview}</small>
          </p>
        </div>
        <div className="col-sm-6">
          <div className="row" style={{ paddingTop: "0" }}>
            <small>
              {props.movieDetails && props.movieDetails.credits?.cast.length > 0 ? (
                props.movieDetails.credits.cast.slice(0, 6).map((member, index) => (
                  <div key={member.id}>
                    {index === 0 ? (
                      <p style={{ margin: "0", float: "left" }}>
                        <span style={{ color: "grey" }}>Cast:</span> {member.name},{" "}
                      </p>
                    ) : (
                      <p style={{ margin: "0", float: "left" }}>{index < 5 ? member.name + ", " : member.name}</p>
                    )}
                  </div>
                ))
              ) : (
                <></>
              )}
            </small>
          </div>
          <div className="row" style={{ paddingTop: "0" }}>
            <small>
              {props.movieDetails && props.movieDetails.genres?.length > 0 ? (
                props.movieDetails.genres.map((genre, index) => (
                  <div key={genre.id}>
                    {index === 0 ? (
                      <p style={{ margin: "0", float: "left" }}>
                        <span style={{ color: "grey" }}>Genres: </span>
                        {genre.name},{" "}
                      </p>
                    ) : (
                      <p style={{ margin: "0", float: "left" }}>
                        {index !== props.movieDetails.genres.length - 1 ? genre.name + ", " : genre.name}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <></>
              )}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
