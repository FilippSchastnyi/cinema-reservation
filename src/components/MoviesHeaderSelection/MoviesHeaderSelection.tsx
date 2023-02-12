import Select from 'react-select'
import { CinemaOptionType } from '@src/ts/types'
import MoviesHeaderSelectionCss from './MoviesHeaderSelection.module.scss'

const MoviesHeaderSelection = ({
  changeCinema,
  cinemaList,
  defaultCinema,
}: {
  defaultCinema: any
  changeCinema: (option: CinemaOptionType) => void
  cinemaList: Array<any>
}) => {
  const options = cinemaList.map((cinema) => {
    return {
      value: cinema.name,
      label: cinema.name,
    }
  })

  return (
    <div className={MoviesHeaderSelectionCss.container}>
      <ul className={MoviesHeaderSelectionCss.list}>
        <li className={MoviesHeaderSelectionCss.item}>
          <Select
            defaultValue={defaultCinema}
            options={options}
            onChange={(option) => changeCinema(option as CinemaOptionType)}
          />
        </li>
      </ul>
    </div>
  )
}

export default MoviesHeaderSelection
