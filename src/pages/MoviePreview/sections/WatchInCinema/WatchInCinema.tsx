import Section from '@components/Section/Section'
import { HallType } from '@src/ts/types'
import { useState } from 'react'
import WatchInCinemaCss from './WatchInCinema.module.scss'
import SessionTimeSelection from './SessionTimeSelection/SessionTimeSelection'
import ActionButtonsGroup from './SessionTimeSelection/ActionButtonsGroup'

type WatchInCinemaProps = {
  halls: HallType[],
}

const WatchInCinema = ({ halls }: WatchInCinemaProps) => {
  const [sessionId, setSessionId] = useState<string | null>(null)

  const handleSessionIdChange = (newSessionId: string) => {
    setSessionId(newSessionId)
  }

  return (
    <Section hasContainer>
      <div className={WatchInCinemaCss.container}>
        <h2 className="title">Watch in the Cinema</h2>
        <SessionTimeSelection
          halls={halls}
          onSessionIdChange={handleSessionIdChange}
          selectedSessionId={sessionId}
        />
        <div className={WatchInCinemaCss.actionGroup}>
          <ActionButtonsGroup
            sessionId={sessionId}
          />
        </div>
      </div>
    </Section>
  )
}

export default WatchInCinema
