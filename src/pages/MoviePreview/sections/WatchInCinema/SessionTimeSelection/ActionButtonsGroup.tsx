import Button from '@ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import NavigationService from '@src/ts/services/NavigationService'

type ActionButtonGroupProps = {
  sessionId: string | null
}

const ActionButtonsGroup = ({
  sessionId,
}: ActionButtonGroupProps) => {
  const navigate = useNavigate()

  const onHandleContinueButtonClick = () => {
    navigate(NavigationService.goToBookingSession(sessionId as string))
  }

  return (
    <>
      <Link to={NavigationService.goToHomePage()}>
        <Button variant="outlined">Back</Button>
      </Link>
        <Button
          disabled={!sessionId}
          onClick={onHandleContinueButtonClick}
        >Continue
        </Button>
    </>
  )
}

export default ActionButtonsGroup
