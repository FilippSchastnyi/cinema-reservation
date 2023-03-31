import InlineSVG from 'react-inlinesvg'
import SeatSVG from '@src/assets/images/svg/seat.svg'
import { SeatType } from '@src/ts/types'
import { useTypedDispatch, useTypedSelector } from '@src/hooks/redux'
import { shopCartSlice } from '@src/store/reducers/shopCartSlice'
import { SeatStatusVariant } from '@src/ts/enums'
import SeatCss from './Seat.module.scss'

enum SeatColorVariant {
  VIP = '#fcaf25',
  STANDARD = '#676767',
  SELECTED = '#6d6bd5',
}

const Seat = ({ seatNumber, status, isBusy, id, row, price }: SeatType) => {
  const isSeatSelected = useTypedSelector((state) =>
    state.shopCart.cartItems.map((seat): string => seat.id)
  ).includes(id)

  let seatColor =
    status === SeatStatusVariant.VIP
      ? SeatColorVariant.VIP
      : SeatColorVariant.STANDARD

  if (isSeatSelected) {
    seatColor = SeatColorVariant.SELECTED
  }

  const dispatch = useTypedDispatch()
  const { addItem } = shopCartSlice.actions
  const onHandleSeatClick = () => {
    dispatch(
      addItem({
        id,
        seatNumber,
        price,
        row,
        status,
      } as SeatType)
    )
  }
  return (
    <button
      className={SeatCss.container}
      onClick={onHandleSeatClick}
      disabled={isBusy}
    >
      <span className={SeatCss.seatNumber}>{seatNumber}</span>
      <InlineSVG src={SeatSVG} width={40} height={40} fill={seatColor} />
    </button>
  )
}

export default Seat
