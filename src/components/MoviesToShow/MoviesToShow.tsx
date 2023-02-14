import MovieCard from '@components/MovieCard/MovieCard'
import {FilmCardType} from "@src/ts/types"
import {useId} from "react"
import MoviesToShowCss from './MoviesToShow.module.scss'

const MoviesToShow = ({ cardInfo }: any): JSX.Element | null => {
  const generatedId = useId()

  return (
    <div className={MoviesToShowCss.container}>
      {cardInfo.map((card: FilmCardType) => (
        <div key={generatedId} className={MoviesToShowCss.item}>
          <MovieCard
            key={card.name}
            name={card.name}
            genres={card.genres}
            image={card.image}
            id={card.id}
          />
        </div>
      ))}
    </div>
  )
}

export default MoviesToShow
