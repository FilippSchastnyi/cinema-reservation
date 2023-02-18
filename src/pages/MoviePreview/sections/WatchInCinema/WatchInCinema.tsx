import Section from '@components/Section/Section'
import { HallType } from '@src/ts/types'
import WatchInCinemaCss from './WatchInCinema.module.scss'
import SessionTimeSelection from './SessionTimeSelection/SessionTimeSelection'

const WatchInCinema = ({ halls }: { halls: HallType[] }) => {
  console.log(halls)
  return (
    <Section hasContainer>
      <h2 className="title">Cinemas</h2>
      <ul className={WatchInCinemaCss.list}>
        {halls.map((hall) => (
          <li key={hall.id}>
            <SessionTimeSelection name={hall.name} schedule={hall.schedule}/>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default WatchInCinema
