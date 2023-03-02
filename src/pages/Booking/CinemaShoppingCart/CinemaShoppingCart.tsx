import {useTypedSelector} from "@src/hooks/redux"
import CinemaShoppingCartCss from "./CinemaShoppingCart.module.scss"

const CinemaShoppingCart = () => {
  const shopStore = useTypedSelector(state => state.shopCart)
  console.log(shopStore)
  return (
    <div>
      SHOP
      {
        shopStore.map((item, index) => (
          <p key={item?.id}>
            {item?.id}
          </p>
        )
      )}
    </div>)
}

export default CinemaShoppingCart