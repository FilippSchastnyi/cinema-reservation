import { HallType } from '@src/ts/types'
import useDateFormatter from '@src/hooks/useDateFormatter'
import Button from '@ui/Button/Button'
import { useState } from 'react'
import SessionTimeSelectionCss from './SessionTimeSelection.module.scss'

type SessionTimeSelectionProps = {
  halls: HallType[]
  canContinueBooking: (canContinue: boolean) => void
}

const SessionTimeSelection = ({
  halls,
  canContinueBooking,
}: SessionTimeSelectionProps) => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const { formatDateToHHMMSS } = useDateFormatter()

  const onHandleTimeSelect = (date: Date, id: string) => {
    canContinueBooking(false)
    setSelectedTime(date)
    setSelectedItem(id)
  }

  return (
    <div className={SessionTimeSelectionCss.container}>
      <ul className={SessionTimeSelectionCss.list}>
        {halls.map((hall) => (
          <li key={hall.id} className={SessionTimeSelectionCss.item}>
            <div className={SessionTimeSelectionCss.left}>
              <span className="text text--24">{hall.name}</span>
            </div>
            <div className={SessionTimeSelectionCss.right}>
              {hall.schedule.map((showTime, index) => {
                const showDateFormat = new Date(showTime.startTime)
                const showDayTime = formatDateToHHMMSS(showDateFormat)
                return (
                  <Button
                    key={showTime.id}
                    onClick={() => {
                      onHandleTimeSelect(showDateFormat, showTime.id)
                    }}
                    isSelected={selectedItem === showTime.id}
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
