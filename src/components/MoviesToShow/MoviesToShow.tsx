import MovieCard from '@components/MovieCard/MovieCard'
import { FilmCardType } from '@src/ts/types'
import { Link } from 'react-router-dom'
import MoviesToShowCss from './MoviesToShow.module.scss'

const MoviesToShow = ({ cardInfo, cinemaId }: any): JSX.Element | null => {
  const goToScheduleUrl = (cardId: string) => `schedule/${cinemaId}/${cardId}`

  return (
    <div className={MoviesToShowCss.container}>
      {cardInfo.map((card: FilmCardType) => (
        <Link
          key={card.id}
          to={goToScheduleUrl(card.id)}
          className={MoviesToShowCss.item}
        >
          <MovieCard
            key={card.name}
            name={card.name}
            genres={card.genres}
            image={card.image}
            id={card.id}
          />
        </Link>
      ))}
    </div>
  )
}

export default MoviesToShow
