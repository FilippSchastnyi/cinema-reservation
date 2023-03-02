import {useQuery} from "@apollo/client"
import {StoreType} from "@src/ts/types"
import {GET_CINEMA_STORE} from "@src/graphQL/query/cinema"
import GoodsCard from "@pages/Booking/CinemaStore/GoodsCard/GoodsCard"
import CinemaStoreCss from "./CinemaStore.module.scss"

const CinemaStore = ({cinemaId}: {cinemaId: string}) => {
  const { loading, error, data } = useQuery(GET_CINEMA_STORE, {
    variables: {
      id: cinemaId,
    },
  })

  if (error) {
    console.log(error)
  }
  if (loading) return <p> loading ...</p>

  if (!data) return null
  const storeData:StoreType = data.storeData.store
  return (
    <div className={CinemaStoreCss.track}>
      {storeData.name}
      <ul className={CinemaStoreCss.list}>
        {storeData.goods.map(item => (
          <li key={item.id} className={CinemaStoreCss.item}>
          <GoodsCard id={item.id} name={item.name} price={item.price} image={item.image}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CinemaStore