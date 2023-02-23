import Section from "@components/Section/Section"
import {useParams} from "react-router-dom"
import BookingCss from "./Booking.module.scss"
import {useQuery} from "@apollo/client"
import {GET_CINEMA_STORE} from "@src/graphQL/query/cinema"

const Booking = () => {
  const {cinemaId, sessionId} = useParams()

  const {loading, error, data} = useQuery(GET_CINEMA_STORE, {
    variables: {
      id: cinemaId
    }
  })

  if (error) {
    console.log(error)
  }
  if (loading) return (<p> loading ...</p>)

  if (!data) return null

  console.log(data)

  return (
    <Section hasContainer>
      <div className={BookingCss.header}>
        {/* checkout -> Film / booking time */}
      </div>
      <div className={BookingCss.banner}>
        {/* MovieInfoBanner -> Film/Cinema */}
      </div>
      <div className={BookingCss.booking}>
        -> Store -> cinema.store
        Hall -> booking
        OrderCalculation ->
      </div>
    </Section>
  )
}

export default Booking