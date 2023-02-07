import { IMovieCard } from '@src/ts/interfaces';
import { Link } from 'react-router-dom';
import MovieCardCss from './MovieCard.module.scss';

const MovieCard = ({
  id, image, name, genres,
}: IMovieCard) => {
  return (
    <Link to={`/afisha/${id}`} className={MovieCardCss.card} key={id}>
      <div className={MovieCardCss.top}>
        <img src={image} alt="movie" />
      </div>
      <div className={MovieCardCss.bottom}>
        <p className="text text--bold">
          {name}
        </p>
        <p className={MovieCardCss.group}>
          <span className="text">{genres}</span>
         { /* stars / rating  */}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
