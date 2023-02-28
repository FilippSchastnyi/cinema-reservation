import {CinemaVariant, SeatStatusVariant} from "@src/ts/enums"
import {ApolloError} from "@apollo/client"

export type ProcessType = {
  error: ApolloError | undefined,
  loading: boolean,
  isData: boolean
}

export type UserType = {
  roles: string[]
  user_id: string
  email: string
  access_token: string
}

export type BaseNameType = {
  id: string
  name: string
}

export type FilmCardType = {
  id: string
  name: string
  genres: Array<BaseNameType>
  image: string
}

export type CinemaOptionType = {
  value: CinemaVariant
  label: string
}

export type MovieInfoType = {
  id?: string
  name: string
  description: string
  director: string
  duration: string
  release: string
  genres: Array<BaseNameType>
  image: string
  country: string
}

export type CinemaDetailsType = {
  id: string
  name: string
  city: string
  films: [BaseNameType]
}

export type CinemaType = {
  id: string
  name: string
  city: string
  films: string[]
  halls: string[]
  store: string[]
}

type ShowTimeType = {
  id: string
  startTime: Date
}

export type HallType = {
  id?: string
  name: string
  plan?: string[]
  schedule: ShowTimeType[]
}

type BookingSchemaType = {
  row: number
  seats: [number]
}

export type SchemaOptionType = {
  rowNumber: number
  seats: SeatType[]
}

export type SessionType = {
  location: string
  schema : SchemaOptionType[]
  showTime: Date
  booking: BookingSchemaType
}

export type SeatType = {
  id?: string
  seatNumber: number
  status: SeatStatusVariant
  isBusy: boolean
}

export type GoodsType = {
  id?: string
  name: string
  price: number
  count?: number
  image: string
}

type TicketType = {
  price: number
  status: SeatStatusVariant
}

export type StoreType = {
  id: string
  name: string
  goods: [GoodsType]
  tickets: TicketType
}