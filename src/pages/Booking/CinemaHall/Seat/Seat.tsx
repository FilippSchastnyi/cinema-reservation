import InlineSVG from 'react-inlinesvg'
import SeatSVG from '@src/assets/images/svg/seat.svg'
import { SeatType } from '@src/ts/types'
import { useTypedDispatch } from '@src/hooks/redux'
import { shopCartSlice } from '@src/store/reducers/shopCartSlice'
import SeatCss from './Seat.module.scss'

const Seat = ({ seatNumber, status, isBusy, id, row }: SeatType) => {
  const dispatch = useTypedDispatch()
  const { addItem } = shopCartSlice.actions
  const onHandleSeatClick = () => {
    dispatch(
      addItem({
        id,
        seatNumber,
        row,
        status,
      })
    )
  }
  return (
    <button className={SeatCss.container} onClick={onHandleSeatClick}>
      <span className={SeatCss.seatNumber}>{seatNumber}</span>
      <InlineSVG
        src={SeatSVG}
        width={35}
        height={35}
        fill={isBusy ? 'red' : 'green'}
      />
    </button>
  )
}

export default Seat
