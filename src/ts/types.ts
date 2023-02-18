import { CinemaVariant } from '@src/ts/enums'
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

export type HallType = {
  id: string
  name: string
  size: string
  plan: string[]
  schedule: string[]
}

export type ScheduleType = {
  id: string
  image: string
  name: string
  genres: string[]
}

export type SeatType = {
  id: string
  image: string
  name: string
  genres: string[]
}

export type StoreType = {
  id: string
  image: string
  name: string
  genres: string[]
}
