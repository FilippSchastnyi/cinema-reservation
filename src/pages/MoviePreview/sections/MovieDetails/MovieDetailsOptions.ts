import {BaseNameType, MovieInfoType} from "@src/ts/types"

type MovieOptionType = {
  name: string
  description: string | Array<BaseNameType>
  id: number
}

const MovieDetailsOptions = (movie: MovieInfoType ): MovieOptionType[] => {
  return [
    {
      name: 'Год выпуска',
      description: movie.release,
      id: 1,
    },
    {
      name: 'Длительность',
      description: movie.duration,
      id: 2,
    },
    {
      name: 'Страна',
      description: movie.country,
      id: 3,
    },
    {
      name: 'Режисер',
      description: movie.director,
      id: 4,
    },
    {
      name: 'Жанр',
      description: movie.genres,
      id: 5,
    },
    {
      name: 'Сюжет',
      description: movie.description,
      id: 6,
    },
  ]
}

export default MovieDetailsOptions