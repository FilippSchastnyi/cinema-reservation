import {GoodsType} from "@src/ts/types"
import GoodsCard from "@pages/Booking/CinemaStore/GoodsCard/GoodsCard"
import CinemaStoreCss from "./CinemaStore.module.scss"

type CinemaStoreType = {
  name: string
  goodsList: GoodsType[]
}

const CinemaStore = ({goodsList, name}: CinemaStoreType) => {

  return (
    <div className={`${CinemaStoreCss.track} scrollbar--narrow`}>
      {name}
      <ul className={CinemaStoreCss.list}>
        {goodsList.map(goods => (
          <li key={goods.id} className={CinemaStoreCss.item}>
          <GoodsCard id={goods.id} name={goods.name} price={goods.price} image={goods.image}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CinemaStore