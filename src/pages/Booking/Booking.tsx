import Section from '@components/Section/Section'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_SESSION_DETAILS } from '@src/graphQL/query/session'
import CinemaHall from '@pages/Booking/CinemaHall/CinemaHall'
import SessionInfoBanner from '@pages/Booking/SessionInfoBanner/SessionInfoBanner'
import CinemaStore from '@pages/Booking/CinemaStore/CinemaStore'
import CinemaShoppingCart from '@pages/Booking/CinemaShoppingCart/CinemaShoppingCart'
import { SessionType, StoreType } from '@src/ts/types'
import BookingCss from './Booking.module.scss'
import {GET_CINEMA_STORE} from "@src/graphQL/query/cinema"

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

  const {
    loading: sessionLoading,
    error: sessionError,
    data: sessionData,
  } = useQuery<SessionDetailsType>(GET_SESSION_DETAILS, {
    variables: {
      sessionId,
      cinemaId,
      movieId,
    },
  })

  const { loading: cinemaStoreLoading, error:cinemaStoreError, data: cinemaStoreData } = useQuery(GET_CINEMA_STORE, {
    variables: {
      id: cinemaId,
    },
  })

  if (cinemaStoreError) {
    console.log(cinemaStoreError)
  }

  if (sessionError) {
    console.log(sessionError)
  }

  if (cinemaStoreLoading) return <p> loading ...</p>

  if (sessionLoading) return <p> loading ...</p>

  if (!sessionData) return null

  const storeData:StoreType = cinemaStoreData.cinemaStore.store

  return (
    <Section hasContainer>
      <h3 className={BookingCss.header}>{sessionData.session.location}</h3>
      <div className={BookingCss.container}>
        <SessionInfoBanner
          movieName={sessionData.movie.name}
          location={sessionData.session.location}
          imageURL={sessionData.movie.image}
          showTime={sessionData.session.showTime}
        />
        <div className={BookingCss.booking}>
          <CinemaStore
            name = {storeData.name}
            goodsList={storeData.goods} />
          <CinemaHall
            schema={sessionData.session.schema}
            tickets = {storeData.tickets}
          />
          <CinemaShoppingCart />
        </div>
      </div>
    </Section>
  )
}

export default Booking
