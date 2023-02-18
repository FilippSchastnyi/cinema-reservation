import { HallType } from '@src/ts/types'
import SessionTimeSelectionCss from './SessionTimeSelection.module.scss'

const SessionTimeSelection = ({ name, schedule }: HallType) => {
  return (
    <div className={SessionTimeSelectionCss.container}>
      <div className={SessionTimeSelectionCss.left}>
        <span className="text text--24">{name}</span>
      </div>
      <div className={SessionTimeSelectionCss.right}>
        {schedule.map((showTime) => (
          <span key={showTime.id} className="text">{}</span>
        ))}
      </div>
    </div>
  )
}

export default SessionTimeSelection
