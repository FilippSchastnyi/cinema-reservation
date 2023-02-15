import Section from '@components/Section/Section'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import { GET_ONE_CINEMA_INFO } from "@src/graphQL/query/cinema"

type UrlScheduleParams = {cinemaId: string, cardId: string}

const Schedule = () => {
  const {cinemaId, cardId} = useParams<UrlScheduleParams>()
  console.log(cinemaId)
  const {data, loading, error} = useQuery(GET_ONE_CINEMA_INFO, {
    variables: {
      id: cinemaId
    }
  })
  if (error){
    console.log(error)
  }
  if (!data) return null
  console.log(data.cinema.name)
  return (
    <Section hasContainer>
      <span>
        Hi, Need work
      </span>
    </Section>
  )
}

export default Schedule
