import Image from '@components/Image/Image';
import { IMovieCard } from '@src/ts/interfaces';
import MovieCardStyles from './MovieCard.module.scss';

const MovieCard = ({
  id, image, name, genres,
}: IMovieCard) => {
  return (
    <a className={MovieCardStyles.Card} href={`/afisha/${id}`}>
      <Image src={image} />
      <div className={MovieCardStyles.Text}>
        <div className={MovieCardStyles.Title}>{name}</div>
        <div className={MovieCardStyles.Genres}>
          {genres.map((genre) => `${genre} `)}
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
