import InlineSVG from "react-inlinesvg"
import SeatSVG from "@src/assets/images/svg/seat.svg"
import {SeatType} from "@src/ts/types"
import SeatCss from "./Seat.module.scss"

const Seat = ({seatNumber, status, isBusy}: SeatType) => {
  return (
    <button className={SeatCss.container}>
      <span className={SeatCss.seatNumber}>{seatNumber}</span>
      <InlineSVG src={SeatSVG} width={35} height={35} fill={isBusy?'red':'green'}/>
    </button>
  )
}

export default Seat