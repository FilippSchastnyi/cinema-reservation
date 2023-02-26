import Section from '@components/Section/Section'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_CINEMA_STORE } from '@src/graphQL/query/cinema'
import { GET_SESSION_DETAILS } from '@src/graphQL/query/session'
import CinemaHall from '@pages/Booking/CinemaHall/CinemaHall'
import SessionInfoBanner from '@pages/Booking/SessionInfoBanner/SessionInfoBanner'
import CinemaStore from '@pages/Booking/CinemaStore/CinemaStore'
import CinemaShoppingCart from '@pages/Booking/CinemaShoppingCart/CinemaShoppingCart'
import { SessionType } from '@src/ts/types'
import BookingCss from './Booking.module.scss'

type SessionDetailsType = {
  session: SessionType
  cinema: {
    name: string
    city: string
  }
  movie: {
    name: string
    image: string
  }
}

const Booking = () => {
  const { cinemaId, sessionId, movieId } = useParams()

  const { loading, error, data } = useQuery<SessionDetailsType>(GET_SESSION_DETAILS, {
    variables: {
      sessionId,
      cinemaId,
      movieId,
    },
  })

  if (error) {
    console.log(error)
  }
  if (loading) return <p> loading ...</p>

  if (!data) return null

  return (
    <Section hasContainer>
      <h3 className={BookingCss.header}>{data.session.location}</h3>
      <div className={BookingCss.container}>
        <SessionInfoBanner
        movieName={data.movie.name}
        location={data.session.location}
        imageURL={data.movie.image}
        showTime={data.session.showTime}
        />
        <div className={BookingCss.booking}>
          <CinemaStore />
          <CinemaHall />
          <CinemaShoppingCart />
        </div>
      </div>
    </Section>
  )
}

export default Booking
