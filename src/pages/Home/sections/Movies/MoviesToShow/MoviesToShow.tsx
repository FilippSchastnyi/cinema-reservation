import MovieCard from '@pages/Home/sections/Movies/MoviesToShow/MovieCard/MovieCard'
import {FilmCardType} from "@src/ts/types"
import { Link } from 'react-router-dom'
import UrlService from "@src/ts/services/UrlService"
import MoviesToShowCss from './MoviesToShow.module.scss'

type MovieToShowProps = {
  cardInfo: FilmCardType[],
  cinemaId: string,
}

const MoviesToShow = ({ cardInfo, cinemaId }: MovieToShowProps): JSX.Element | null => {

  return (
    <div className={MoviesToShowCss.container}>
      {cardInfo.map((card: FilmCardType) => (
        <Link
          key={card.id}
          to={UrlService.goToFilmSchedule(cinemaId, card.id)}
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
