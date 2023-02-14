import MovieCard from '@components/MovieCard/MovieCard'
import {FilmCardType} from "@src/ts/types"
import {useId} from "react"
import {Link} from "react-router-dom"
import MoviesToShowCss from './MoviesToShow.module.scss'

const MoviesToShow = ({ cardInfo, cinemaId }: any): JSX.Element | null => {
  const generatedId = useId()
  const goToUrl = (cardId)=> {
    return `schedule/${cinemaId}/${cardId}`
  }

  return (
    <div className={MoviesToShowCss.container}>
      {cardInfo.map((card: FilmCardType) => (
        <Link to={goToUrl(card.id)} key={generatedId} className={MoviesToShowCss.item}>
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
