import { CinemaDetailsType } from '@src/ts/types'
import CinemaDetailsCss from './CinemaDetails.module.scss'

const CinemaDetails = ({ id, name, city, films }: CinemaDetailsType) => {
  return (
    <div className={CinemaDetailsCss.container}>
      <div className={CinemaDetailsCss.left}>
        <span className="text text--24">{name}</span>
        <span className="text">{city}</span>
      </div>
      <div className={CinemaDetailsCss.right}>
        {films.map((film) => (
          <span className="text" key={film.id}>
            {film.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CinemaDetails
