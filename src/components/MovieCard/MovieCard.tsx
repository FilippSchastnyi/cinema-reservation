import Image from '@components/Image/Image';
import MovieCardStyles from './MovieCard.module.scss';

interface IMovieCardProps {
  image: string;
  name: string;
  genres: string[];
}

const MovieCard = ({ image, name, genres }: IMovieCardProps) => {
  return (
    <a className={MovieCardStyles.Card} href="/">
      <Image src={image} />
      <div className={MovieCardStyles.Text}>
        <div className={MovieCardStyles.Title}>{name}</div>
        <div className={MovieCardStyles.Genres}>{genres.map((genre) => `${genre} `)}</div>
      </div>
    </a>
  );
};

export default MovieCard;
