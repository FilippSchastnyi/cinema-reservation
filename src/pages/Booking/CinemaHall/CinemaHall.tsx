import { SchemaOptionType } from '@src/ts/types'
import CinemaHallCss from './CinemaHall.module.scss'

const CinemaHall = ({ schema }: { schema: SchemaOptionType[] }) => {
  console.log(schema)
  return (
    <div className={CinemaHallCss.container}>
      <h3 className="title">Cinema Hall</h3>
      <ul className={CinemaHallCss.schema}>
        {schema.map((row) => {
          return (
            <li key={row.rowNumber}>
              <ul className={CinemaHallCss.row}>
                {row.seats.map((seat) => {
                  return <li key={seat.id}>{seat.seatNumber}</li>
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CinemaHall
