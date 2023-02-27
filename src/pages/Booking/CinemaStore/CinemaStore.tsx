import CinemaStoreCss from "./CinemaStore.module.scss"
import {useQuery} from "@apollo/client"
import {StoreType} from "@src/ts/types"
import {GET_CINEMA_STORE} from "@src/graphQL/query/cinema"
import GoodsCard from "@pages/Booking/CinemaStore/GoodsCard/GoodsCard"

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
  console.log(storeData)
  return (
    <div>
      {storeData.name}
      <ul className={CinemaStoreCss.list}>
        {storeData.goods.map(item => (
          <GoodsCard key={item.id} name={item.name} price={item.price} image={item.image}/>
        ))}
      </ul>
    </div>
  )
}

export default CinemaStore