import { Link } from 'react-router-dom'
import { FilmCardType } from '@src/ts/types'
import { useId } from 'react'
import MovieCardCss from './MovieCard.module.scss'

const MovieCard = ({ id, image, name, genres }: FilmCardType) => {
  const generatedId = useId()

  return (
    <Link to={`/afisha/${id}`} className={MovieCardCss.card} key={id}>
      <div className={MovieCardCss.top}>
        <img src={image} alt="movie" />
      </div>
      <div className={MovieCardCss.bottom}>
        <p className="text text--bold">{name}</p>
        <p className={MovieCardCss.group}>
          {genres.map((genre, index) => (
            <span key={generatedId} className="text">
              {genres.length !== index + 1 ? `${genre  }, ` : genre}
            </span>
          ))}
        </p>
      </div>
    </Link>
  )
}

export default MovieCard
