import Section from "@components/Section/Section"
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_CINEMA_STORE} from "@src/graphQL/query/cinema"
import {GET_SESSION_DETAILS} from "@src/graphQL/query/session"
import BookingCss from "./Booking.module.scss"

const Booking = () => {
  const {
    cinemaId,
    sessionId
  } = useParams()

  const {
    loading,
    error,
    data
  } = useQuery(GET_CINEMA_STORE, {
    variables: {
      id: cinemaId
    }
  })

  const {
    loading: sessionDetailsLoading,
    error: sessionDetailsError,
    data: sessionDetailsData
  } = useQuery(GET_SESSION_DETAILS, {
    variables: {
      getOneSessionId: sessionId
    }
  })

  if (error || sessionDetailsError) {
    console.log(error || sessionDetailsError)
  }
  if (loading || sessionDetailsLoading) return (<p> loading ...</p>)

  if (!data || !sessionDetailsData) return null

  const {sessionData} = sessionDetailsData

  return (
    <Section hasContainer>
        <h3 className={BookingCss.header}>
          {sessionData.hallName}
        </h3>
      <div className={BookingCss.container}>
        <div className={BookingCss.banner}>
          {/* MovieInfoBanner -> Film/Cinema */}
        </div>
        <div className={BookingCss.booking}>
          {/*         -> Store -> cinema.store
        Hall -> booking
        OrderCalculation -> */}
        </div>
      </div>
    </Section>
  )
}

export default Booking