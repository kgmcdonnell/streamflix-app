import "./MoviesIndex.scoped.scss";

export function Card(props) {
  return (
    <div className="card border-dark">
      <div
        className="card-body"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${props.movie.poster_path}')`,
        }}
      ></div>
    </div>
  );
}
