import Button from "@ui/Button/Button"
import {Link} from "react-router-dom"
import NavigationService from "@src/ts/services/NavigationService"

const ActionButtonsGroup = ({canContinue = false}) => {
  return (
    <>
      <Link to={NavigationService.goToHomePage()}>
        <Button variant='outlined'>Back</Button>
      </Link>
      <Button disabled={canContinue}>Continue</Button>
    </>
  )
}

export default ActionButtonsGroup