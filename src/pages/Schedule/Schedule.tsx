import Section from '@components/Section/Section'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_CINEMA_HALLS_DETAILS} from "@src/graphQL/query/hall"
import {GET_ONE_CINEMA_INFO} from "@src/graphQL/query/cinema"
import {ProcessType} from "@src/ts/types"

type UrlScheduleParams = {cinemaId: string, cardId: string}

const Schedule = () => {
  const {cinemaId, cardId} = useParams<UrlScheduleParams>()


  const { data: hallsDetailsData, loading: hallsLoading, error: hallsError} = useQuery(GET_CINEMA_HALLS_DETAILS, {
    variables: {
      cinemaId
    }
  })

  const {data: cinemaData, loading: cinemaLoading, error: cinemaError} = useQuery(GET_ONE_CINEMA_INFO, {
    variables: {
      id: cardId
    }
  })

  const scheduleProcess: ProcessType = {
    error: hallsError || cinemaError,
    loading: hallsLoading || cinemaLoading,
    isData: hallsDetailsData && cinemaData
  }

  if (scheduleProcess.error) {
    console.log(scheduleProcess.error)
  }

  if (scheduleProcess.loading){
    return (<p>...Loading</p>)
  }

  if (!scheduleProcess.isData) return null

  const {hallsData} = hallsDetailsData

  return (
    <Section hasContainer>
      <div className="title text--bold">
        {hallsData.cinemaName}
      </div>
      movieDetails
    </Section>
  )
}

export default Schedule
