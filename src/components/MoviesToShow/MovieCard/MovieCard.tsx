import { FilmCardType } from '@src/ts/types'
import Image from '@ui/Image/Image'
import MovieCardCss from './MovieCard.module.scss'

const MovieCard = ({ id, image, name, genres }: FilmCardType) => {
  return (
    <div className={MovieCardCss.card}>
      <div className={MovieCardCss.top}>
        <Image src={image} srcSet={image} alt="movie" />
      </div>
      <div className={MovieCardCss.bottom}>
        <p className="text text--bold">{name}</p>
        <p className={MovieCardCss.group}>
          {genres.map((genre, index) => (
            <span key={genre.id} className="text">
              {genres.length !== index + 1 ? `${genre.name}, ` : genre.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
