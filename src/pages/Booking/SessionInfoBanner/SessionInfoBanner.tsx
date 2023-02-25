import Image from "@ui/Image/Image"
import SessionInfoBannerCss from "./SessionInfoBanner.module.scss"

type SessionInfoBannerProps = {
  movieName: string,
  showTime: Date,
  location: string,
  imageURL: string
}

const SessionInfoBanner = ({imageURL,location,movieName,showTime}:SessionInfoBannerProps) => {
  return (
    <div>
      <Image/>
      <div className={SessionInfoBannerCss.content}>
        filmName
        date, and time
        location
      </div>
    </div>
  )
}

export default SessionInfoBanner