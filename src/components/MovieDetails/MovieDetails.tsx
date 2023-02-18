import { BaseNameType, MovieInfoType } from '@src/ts/types'
import Button from '@ui/Button/Button'
import MovieDetailsItem from '@components/MovieDetails/MovieDetailsItem'
import MovieDetailsCss from './MovieDetails.module.scss'

type MovieOptionType = {
  name: string
  description: string | Array<BaseNameType>
  id: number
}

const MovieDetails = ({ movie }: { movie: MovieInfoType }) => {
  const movieOptions: MovieOptionType[] = [
    { name: 'Год выпуска', description: movie.release, id: 1 },
    { name: 'Длительность', description: movie.duration, id: 2 },
    { name: 'Страна', description: movie.country, id: 3 },
    { name: 'Режисер', description: movie.director, id: 4 },
    { name: 'Жанр', description: movie.genres, id: 5 },
    { name: 'Сюжет', description: movie.description, id: 6 },
  ]
  return (
    <div className={MovieDetailsCss.wrapper}>
      <div className={MovieDetailsCss.left}>
        <img src={movie.image} alt="Постер" />
      </div>
      <div className={MovieDetailsCss.right}>
        <h3 className="title">{movie.name}</h3>
        {movieOptions.map((option) => (
          <MovieDetailsItem
            key={option.id}
            name={option.name}
            description={option.description}
          />
        ))}
        <Button>Заказать</Button>
      </div>
    </div>
  )
}

export default MovieDetails
