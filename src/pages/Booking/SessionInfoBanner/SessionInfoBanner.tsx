import Image from '@ui/Image/Image'
import SessionInfoBannerCss from './SessionInfoBanner.module.scss'

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
  return (
    <div className={SessionInfoBannerCss.container}>
      <div className={SessionInfoBannerCss.left}>
        <div className={SessionInfoBannerCss.image}>
          <Image src={imageURL} srcSet={imageURL} alt="movie" />
        </div>
      </div>
      <div className={SessionInfoBannerCss.right}>
        <span>{showTime.toString()}</span>
        <span>{showTime.toString()}</span>
        <span>{showTime.toString()}</span>
      </div>
    </div>
  )
}

export default SessionInfoBanner
