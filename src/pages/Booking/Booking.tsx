import Section from "@components/Section/Section"
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_CINEMA_STORE} from "@src/graphQL/query/cinema"
import {GET_SESSION_DETAILS} from "@src/graphQL/query/session"
import CinemaHall from "@pages/Booking/CinemaHall/CinemaHall"
import SessionInfoBanner from "@pages/Booking/SessionInfoBanner/SessionInfoBanner"
import CinemaStore from "@pages/Booking/CinemaStore/CinemaStore"
import CinemaShoppingCart from "@pages/Booking/CinemaShoppingCart/CinemaShoppingCart"
import BookingCss from "./Booking.module.scss"
import {CinemaStoreType} from "@src/ts/types"

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
  const {cinemaStoreData} : {cinemaStoreData: CinemaStoreType} = data

  return (
    <Section hasContainer>
        <h3 className={BookingCss.header}>
          {sessionData.hallName}
        </h3>
      <div className={BookingCss.container}>
          <SessionInfoBanner
          />
        <div className={BookingCss.booking}>
          <CinemaStore/>
          <CinemaHall/>
          <CinemaShoppingCart/>
        </div>
      </div>
    </Section>
  )
}

export default Booking