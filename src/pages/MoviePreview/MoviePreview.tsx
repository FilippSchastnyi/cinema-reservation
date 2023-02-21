import MovieDetails from '@pages/MoviePreview/sections/MovieDetails/MovieDetails'
import WatchInCinema from '@pages/MoviePreview/sections/WatchInCinema/WatchInCinema'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_CINEMA_HALLS_DETAILS } from '@src/graphQL/query/hall'
import Section from '@components/Section/Section'
import {HallDataType, HallType} from "@src/ts/types"

type UrlScheduleParams = { cinemaId: string; movieId: string }

const MoviePreview = () => {
  const { cinemaId, movieId } = useParams<UrlScheduleParams>()
  const { data, loading, error } = useQuery<{ hallsData: HallDataType }>(GET_CINEMA_HALLS_DETAILS, {
    variables: {
      cinemaId,
    },
  })

  if (error) {
    console.log(error)
    const date = new Date()
  }

  if (loading) {
    return <p>...Loading</p>
  }

  if (!data) return null

  const {hallsData} = data
  return (
    <>
      <MovieDetails movieId={movieId as string} title={hallsData.cinemaName}/>
      <WatchInCinema halls={hallsData.halls} />
    </>
  )
}

export default MoviePreview
