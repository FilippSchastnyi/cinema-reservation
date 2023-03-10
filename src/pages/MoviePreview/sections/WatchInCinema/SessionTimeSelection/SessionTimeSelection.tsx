import { HallType } from '@src/ts/types'
import useDateFormatter from '@src/hooks/useDateFormatter'
import Button from '@ui/Button/Button'
import SessionTimeSelectionCss from './SessionTimeSelection.module.scss'

type SessionTimeSelectionProps = {
  halls: HallType[]
  onSessionIdChange: (id: string) => void
  selectedSessionId: string | null
}

const SessionTimeSelection = ({
  halls,
  selectedSessionId,
  onSessionIdChange,
}: SessionTimeSelectionProps) => {
  const { formatDateToHHMMSS } = useDateFormatter()

  return (
    <div className={SessionTimeSelectionCss.container}>
      <ul className={SessionTimeSelectionCss.list}>
        {halls.map((hall) => (
          <li key={hall.id} className={SessionTimeSelectionCss.item}>
            <div className={SessionTimeSelectionCss.left}>
              <span className="text text--24">{hall.name}</span>
            </div>
            <div className={SessionTimeSelectionCss.right}>
              {hall.schedule.map((showTime) => {
                const showDateFormat = new Date(showTime.showTime)
                const showDayTime = formatDateToHHMMSS(showDateFormat)
                return (
                  <Button
                    key={showTime.id}
                    onClick={() => {
                      onSessionIdChange(showTime.id)
                    }}
                    isSelected={selectedSessionId === showTime.id}
                    size="sm"
                    variant="outlined"
                  >
                    <>
                      {showDayTime.hours}:{showDayTime.minutes}
                    </>
                  </Button>
                )
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SessionTimeSelection
