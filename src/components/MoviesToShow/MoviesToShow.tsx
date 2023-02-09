import { useQuery } from '@apollo/client';
import { GET_FILM_CARDS_INFO } from '@src/graphQL/query/film';
import { FilmCardType } from '@src/ts/types';
import MovieCard from '@components/MovieCard/MovieCard';
import MoviesToShowCss from './MoviesToShow.module.scss';

const MoviesToShow = (): JSX.Element | null => {
  const { loading, error, data } = useQuery(GET_FILM_CARDS_INFO, {
    variables: {
      input: {
        name: 'GOLDEN_SCREEN',
      },
    },
  });
  if (!data) return null;
  if (loading) return null;
  if (error) return null;

  const { cardInfo } : { cardInfo: Array<FilmCardType> } = data;
  console.log(cardInfo);

  return (
    <div className={MoviesToShowCss.container}>
      {cardInfo.map((card) => (
        <MovieCard
          key={card.name}
          name={card.name}
          genres={card.genres}
          image={card.image}
          id={card.name}
        />
      ))}
    </div>
  );
};

export default MoviesToShow;
