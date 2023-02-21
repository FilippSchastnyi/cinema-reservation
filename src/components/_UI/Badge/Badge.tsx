import React, {useState} from "react"
import BadgeCss from "./Badge.module.scss"

type BadgeProps = {
  children: React.ReactNode | string
  isDisabled: boolean
}

const Badge = ({children, isDisabled} : BadgeProps) => {
  const [active, setActive] = useState(false)
  const classes = [BadgeCss.buttonContainer]
  if (active) {
    classes.push(BadgeCss.active)
  }

  const onHandleBadgeClick =()=> {
    setActive(!active)
  }

  return (
    <div className={BadgeCss.badge}>
      <button className={classes.join(' ')}
        type="button"
        onClick={onHandleBadgeClick}
        disabled={isDisabled}
        >
        {children}
      </button>
    </div>
  )
}

export default Badge