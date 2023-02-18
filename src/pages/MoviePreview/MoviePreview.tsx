import Section from '@components/Section/Section'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_CINEMA_HALLS_DETAILS} from "@src/graphQL/query/hall"
import {MovieInfoType, ProcessType} from "@src/ts/types"
import MovieDetails from "@components/MovieDetails/MovieDetails"
import {GET_FILM_INFO} from "@src/graphQL/query/film"

type UrlScheduleParams = {cinemaId: string, cardId: string}

const MoviePreview = () => {
  const {cinemaId, cardId} = useParams<UrlScheduleParams>()


  const { data: hallsDetailsData, loading: hallsLoading, error: hallsError} = useQuery(GET_CINEMA_HALLS_DETAILS, {
    variables: {
      cinemaId
    }
  })

  const {data: filmInfoData, loading: filmLoading, error: filmError} = useQuery(GET_FILM_INFO, {
    variables: {
      filmId: cardId
    }
  })


  const scheduleProcess: ProcessType = {
    error: hallsError || filmError,
    loading: hallsLoading || filmLoading,
    isData: hallsDetailsData && filmInfoData
  }

  if (scheduleProcess.error) {
    console.log(scheduleProcess.error)
  }

  if (scheduleProcess.loading){
    return (<p>...Loading</p>)
  }

  if (!scheduleProcess.isData) return null

  const { movieData } : { movieData: MovieInfoType } = filmInfoData
  const { hallsData } = hallsDetailsData

  console.log(movieData)
  console.log(hallsData)

  return (
    <Section hasContainer>
      <div className="title text--bold">
        {hallsData.cinemaName}
      </div>
       <MovieDetails movie={movieData}/>
    </Section>
  )
}

export default MoviePreview
