import {SchemaOptionType} from "@src/ts/types"
import Seat from '@pages/Booking/CinemaHall/Seat/Seat'
import CinemaHallCss from './CinemaHall.module.scss'

type CinemaHallProps = {
  schema: SchemaOptionType[]
}

const CinemaHall = ({ schema }: CinemaHallProps) => {

  return (
    <div className={CinemaHallCss.container}>
      <h3 className="title">Cinema Hall</h3>
      <ul className={CinemaHallCss.schema}>
        {schema.map((row) => {
          return (
            <li key={row.rowNumber} className={CinemaHallCss.row}>
              <span className={CinemaHallCss.rowNumber}>
                {row.rowNumber}
              </span>
              <ul className={CinemaHallCss.seats}>
                {row.seats.map((seat) => {
                  return (
                    <li key={seat.id}>
                      <Seat
                        seatNumber={seat.seatNumber}
                        status={seat.status}
                        isBusy={seat.isBusy}
                        id={seat.id}
                        row={row.rowNumber}
                        price={seat.price}
                      />
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        }).reverse()}
      </ul>
    </div>
  )
}

export default CinemaHall
