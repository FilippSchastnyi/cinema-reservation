import Section from '@components/Section/Section'
import { HallType } from '@src/ts/types'
import {useState} from "react"
import WatchInCinemaCss from './WatchInCinema.module.scss'
import SessionTimeSelection from './SessionTimeSelection/SessionTimeSelection'
import ActionButtonsGroup  from "./SessionTimeSelection/ActionButtonsGroup"

const WatchInCinema = ({ halls }: { halls: HallType[] }) => {
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(true);
  return (
    <Section hasContainer>
      <div className={WatchInCinemaCss.container}>
        <h2 className="title">Watch in the Cinema</h2>
        <SessionTimeSelection halls={halls}
          canContinueBooking = {setIsContinueButtonDisabled}
        />
        <div className={WatchInCinemaCss.actionGroup}>
        <ActionButtonsGroup canContinue={isContinueButtonDisabled} />
        </div>
      </div>
    </Section>
  )
}

export default WatchInCinema
