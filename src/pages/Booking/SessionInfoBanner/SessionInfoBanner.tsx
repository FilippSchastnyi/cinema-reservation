import Image from '@ui/Image/Image'
import SessionInfoBannerCss from './SessionInfoBanner.module.scss'
import useDateFormatter from '@src/hooks/useDateFormatter'

type SessionInfoBannerProps = {
  movieName: string
  showTime: Date
  location: string
  imageURL: string
}

const SessionInfoBanner = ({
  imageURL,
  location,
  movieName,
  showTime,
}: SessionInfoBannerProps) => {
  const { formatDateToDDMMYY, formatDateToHHMMSS } = useDateFormatter()

  const getConvertedShowTime = () => {
    const time = new Date(showTime)

    const formattedDate = formatDateToDDMMYY(time)
    const formattedTime = formatDateToHHMMSS(time)

    return `${formattedDate.day}.${formattedDate.month}.${formattedDate.year}, ${formattedTime.hours}:${formattedTime.minutes}`
  }

  return (
    <div className={SessionInfoBannerCss.container}>
      <div className={SessionInfoBannerCss.left}>
        <div className={SessionInfoBannerCss.image}>
          <Image src={imageURL} srcSet={imageURL} alt="movie" />
        </div>
      </div>
      <div className={SessionInfoBannerCss.right}>
        <span>{movieName}</span>
        <span>{getConvertedShowTime()}</span>
        <span>{location}</span>
      </div>
    </div>
  )
}

export default SessionInfoBanner
