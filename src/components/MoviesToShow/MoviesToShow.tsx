import MovieCard from '@components/MovieCard/MovieCard';
import { CinemaVariant } from '@src/ts/enums';
import MoviesToShowCss from './MoviesToShow.module.scss';

const MoviesToShow = ({ cardInfo }: any): JSX.Element | null => {
  return (
    <div className={MoviesToShowCss.container}>
      {cardInfo.map((card) => (
        <MovieCard
          key={card.name}
          name={card.name}
          genres={card.genres}
          image={card.image}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default MoviesToShow;
