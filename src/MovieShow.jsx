import "./MovieShow.scoped.scss";
import ReactPlayer from "react-player/youtube";

export function MovieShow(props) {
  const movieInformation = (runtime, release) => {
    const duration = runtime / 60.0;
    const hours = Math.floor(duration);
    const minutes = Math.round(duration - hours);
    return release + " " + hours + "h" + " " + minutes + "m";
  };

  return (
    <div id="movie-show">
      {props.movieDetails && props.movieDetails.videos?.results.length > 0 ? (
        <div id="slider" className="center-video">
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
          <p style={{ color: "rgb(224,224,224)" }}>
            {props.movieDetails.release_date ? (
              movieInformation(props.movieDetails.runtime, props.movieDetails.release_date.split("-")[0])
            ) : (
              <></>
            )}
          </p>
          <p style={{ marginTop: "20px" }}>
            <small>{props.movie.overview}</small>
          </p>
        </div>
        <div className="col-sm-5">
          <div className="row" style={{ paddingTop: "0px" }}>
            <small>
              {props.movieDetails && props.movieDetails.credits?.cast.length > 0 ? (
                props.movieDetails.credits.cast.slice(0, 6).map((member, index) => (
                  <div key={member.id}>
                    {index === 0 ? (
                      <p>
                        <span style={{ color: "grey" }}>Cast:</span> {member.name},{" "}
                      </p>
                    ) : (
                      <p>{index < 5 ? member.name + ", " : member.name}</p>
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
                      <p>
                        <span style={{ color: "grey" }}>Genres: </span>
                        {genre.name},{" "}
                      </p>
                    ) : (
                      <p>{index !== props.movieDetails.genres.length - 1 ? genre.name + ", " : genre.name}</p>
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
