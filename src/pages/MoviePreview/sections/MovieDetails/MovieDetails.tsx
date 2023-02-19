import { MovieInfoType, ProcessType } from '@src/ts/types'
import Button from '@ui/Button/Button'
import MovieDetailsItem from '@pages/MoviePreview/sections/MovieDetails/MovieDetailsItem'
import { useQuery } from '@apollo/client'
import { GET_FILM_INFO } from '@src/graphQL/query/film'
import MovieDetailsOptions from '@pages/MoviePreview/sections/MovieDetails/MovieDetailsOptions'
import Section from "@components/Section/Section"
import MovieDetailsCss from './MovieDetails.module.scss'

const MovieDetails = ({ movieId, title }: {movieId: string, title: string}) => {

  const {
    data,
    loading,
    error,
  } = useQuery(GET_FILM_INFO, {
    variables: {
      movieId,
    },
  })

  if (error) {
    console.log(error)
  }

  if (loading) {
    return <p>...Loading</p>
  }

  if (!data) return null

  const { movieData }: { movieData: MovieInfoType } = data

  return (
    <Section hasContainer>
      <h2 className="title">{title}</h2>
      <div className={MovieDetailsCss.wrapper}>
        <div className={MovieDetailsCss.left}>
          <img src={movieData.image} alt="Постер" />
        </div>
        <div className={MovieDetailsCss.right}>
          <h3 className="title">{movieData.name}</h3>
          {MovieDetailsOptions(movieData).map((option) => (
            <MovieDetailsItem
              key={option.id}
              name={option.name}
              description={option.description}
            />
          ))}
          <Button>Заказать</Button>
        </div>
      </div>
    </Section>
  )
}

export default MovieDetails
