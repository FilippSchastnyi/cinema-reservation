import {SchemaOptionType, TicketType} from "@src/ts/types"
import Seat from '@pages/Booking/CinemaHall/Seat/Seat'
import CinemaHallCss from './CinemaHall.module.scss'

type CinemaHallProps = {
  tickets: TicketType[]
  schema: SchemaOptionType[]
}

const CinemaHall = ({ schema, tickets }: CinemaHallProps) => {
  return (
    <div className={CinemaHallCss.container}>
      <h3 className="title">Cinema Hall</h3>
      <ul className={CinemaHallCss.schema}>
        {schema.map((row) => {
          return (
            <li key={row.rowNumber} className={CinemaHallCss.row}>
              <span className={CinemaHallCss.rowNumber}>
                {schema.length - row.rowNumber + 1}
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
                      />
                    </li>
                  )
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
