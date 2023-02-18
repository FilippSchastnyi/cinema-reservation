import Section from '@components/Section/Section'
import { useQuery } from '@apollo/client'
import { GET_CINEMAS_INFO } from '@src/graphQL/query/cinema'
import { CinemaDetailsType } from '@src/ts/types'
import CinemaDetails from '@components/CinemaDetails/CinemaDetails'
import CinemaCss from './Cinemas.module.scss'

const Cinemas = (): JSX.Element | null => {
  const { loading, error, data } = useQuery(GET_CINEMAS_INFO)

  if (loading) return <p>loading...</p>
  if (error) {
    console.log(error)
    return null
  }
  if (!data) return null
  const { cinemaList }: { cinemaList: CinemaDetailsType[] } = data

  return (
    <Section hasContainer>
      <>
        <h2 className="title">Cinemas</h2>
        <ul className={CinemaCss.list}>
          {cinemaList.map((cinema) => (
            <li key={cinema.id}>
              <CinemaDetails
                id={cinema.id}
                name={cinema.name}
                city={cinema.city}
                films={cinema.films}
              />
            </li>
          ))}
        </ul>
      </>
    </Section>
  )
}

export default Cinemas
