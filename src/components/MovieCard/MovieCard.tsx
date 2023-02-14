import { Link } from 'react-router-dom'
import { FilmCardType } from '@src/ts/types'
import MovieCardCss from './MovieCard.module.scss'

const MovieCard = ({ id, image, name, genres }: FilmCardType) => {

  return (
    <Link to={`/afisha/${id}`} className={MovieCardCss.card}>
      <div className={MovieCardCss.top}>
        <img src={image} alt="movie" />ya
      </div>
      <div className={MovieCardCss.bottom}>
        <p className="text text--bold">{name}</p>
        <p className={MovieCardCss.group}>
          {genres.map((genre, index) => (
            <span key={genre.id} className="text">
              {genres.length !== index + 1 ? `${genre.name  }, ` : genre.name}
            </span>
          ))}
        </p>
      </div>
    </Link>
  )
}

export default MovieCard
