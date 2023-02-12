import MoviesToShow from '@components/MoviesToShow/MoviesToShow'
import MoviesHeaderSelection from '@components/MoviesHeaderSelection/MoviesHeaderSelection'
import Section from '@components/Section/Section'
import { useState } from 'react'
import { CinemaVariant } from '@src/ts/enums'
import { CinemaOptionType, FilmCardType } from '@src/ts/types'
import { useQuery } from '@apollo/client'
import { GET_FILM_CARDS_INFO } from '@src/graphQL/query/film'
import { GET_ALL_CINEMAS } from '@src/graphQL/query/cinema'
import Pagination from '@ui/Pagination/Pagination'

const Movies = () => {

  const [cinema, setCinema] = useState<CinemaOptionType>({
    value: CinemaVariant.GOLDEN_SCREEN,
    label: 'GOLDEN_CINEMA',
  })

  const {
    loading: cinemaLoading,
    error: cinemaError,
    data: cinemaData,
  } = useQuery(GET_ALL_CINEMAS)

  const { loading, error, data, refetch } = useQuery(GET_FILM_CARDS_INFO, {
    variables: {
      input: {
        name: cinema.value,
        page: 1,
        limit: 1
      },
    },
  })

  const fetchCinemaFilms = (page: number, limit: number)=> {
    console.log(page, limit)
    refetch({
      input: {
        name: cinema.value,
        page,
        limit
      }
    })
  }

  if (loading || cinemaLoading) return <p>loading...</p>
  if (error || cinemaError) {
    console.log(error)
    return null
  }
  if (!data || !cinemaData) return null
  const { cinemaList }: { cinemaList: Array<any> } = cinemaData
  const { cardInfoList }: { cardInfoList: Array<FilmCardType> } = data

  console.log(cinemaList)

  return (
    <Section hasContainer>
      <>
        <h2 className="title">Movies</h2>
        <MoviesHeaderSelection
          defaultCinema={cinema}
          changeCinema={setCinema}
          cinemaList={cinemaList}
        />
        <MoviesToShow cardInfo={cardInfoList} />
        <Pagination itemsPerPage={1} pageCount={2} onPaginationButtonClick ={fetchCinemaFilms}/>
      </>
    </Section>
  )
}
export default Movies
