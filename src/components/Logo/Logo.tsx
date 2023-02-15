import { Link } from 'react-router-dom'
import LogoCss from './Logo.module.scss'

const Logo = () => {
  return (
    <Link to="/" className={LogoCss.logo}>
      CinemaReservation
    </Link>
  )
}

export default Logo
