import Section from '@components/Section/Section'
import { useState } from 'react'
import { CinemaVariant } from '@src/ts/enums'
import { CinemaOptionType, FilmCardType } from '@src/ts/types'
import { useQuery } from '@apollo/client'
import { GET_FILM_CARDS_INFO } from '@src/graphQL/query/film'
import { GET_CINEMAS_NAMES } from '@src/graphQL/query/cinema'
import Pagination from '@ui/Pagination/Pagination'
import MoviesToShow from "@pages/Home/sections/Movies/MoviesToShow/MoviesToShow"
import MoviesHeaderSelection from "./MoviesHeaderSelection/MoviesHeaderSelection"

const Movies = () => {
  const MOVIES_PAGE_LIMIT = 1
  const START_PAGE = 1

  const [activeCinema, setActiveCinema] = useState<CinemaOptionType>({
    value: CinemaVariant.GOLDEN_SCREEN,
    label: 'GOLDEN_CINEMA',
  })

  const [activePage, setActivePage] = useState(0)

  const {
    loading: cinemaLoading,
    error: cinemaError,
    data: cinemaData,
  } = useQuery(GET_CINEMAS_NAMES)

  const { loading, error, data, refetch } = useQuery(GET_FILM_CARDS_INFO, {
    variables: {
      input: {
        name: activeCinema.value,
        page: START_PAGE,
        limit: MOVIES_PAGE_LIMIT,
      },
    },
  })

  const fetchCinemaFilms = (
    page: number | undefined = START_PAGE,
    limit: number | undefined = MOVIES_PAGE_LIMIT,
    option: CinemaOptionType = activeCinema
  ) => {
    if (option.value !== activeCinema.value) {
      setActiveCinema({
        value: option.value,
        label: option.label,
      })
      setActivePage(0)
    }
    setActivePage(page - 1)
    refetch({
      input: {
        name: option.value,
        page,
        limit,
      },
    })
  }

  if (loading || cinemaLoading) return <p>loading...</p>
  if (error || cinemaError) {
    console.log(error)
    return null
  }

  if (!data || !cinemaData) return null

  const { cinemaList }: { cinemaList: Array<any> } = cinemaData
  const {
    cinemaFilmsData,
  }: {
    cinemaFilmsData: { films: Array<FilmCardType>; documentsCount: number }
  } = data

  const currentCinemaId = cinemaList.find(
    (cinema) => cinema.name === activeCinema.value
  ).id

  return (
    <Section hasContainer>
      <>
        <h2 className="title">Movies</h2>
        <MoviesHeaderSelection
          defaultCinema={activeCinema}
          changeCinema={fetchCinemaFilms}
          cinemaList={cinemaList}
        />
        <MoviesToShow
          cardInfo={cinemaFilmsData.films}
          cinemaId={currentCinemaId}
        />
        <Pagination
          activePage={activePage}
          itemsPerPage={MOVIES_PAGE_LIMIT}
          documentsCount={cinemaFilmsData.documentsCount}
          onPaginationButtonClick={fetchCinemaFilms}
        />
      </>
    </Section>
  )
}
export default Movies
