import { GoodsTypeVariant, SeatStatusVariant } from '@src/ts/enums'
import { Card } from 'antd'
import CartItemCss from './CartItem.module.scss'

type CartItemProps = {
  title: string
  status: SeatStatusVariant | GoodsTypeVariant
  price: number
}

const CartItem = ({ title, status, price }: CartItemProps): JSX.Element => {
  let statusClass
  switch (status) {
    case 'STANDARD':
      statusClass = 'text--grey'
      break
    case 'VIP':
      statusClass = 'text--blue-80'
      break
    case 'FOOD':
      statusClass = 'text--green'
      break
    default:
      statusClass = ''
      break
  }

  return (
    <Card bodyStyle={{ padding: 10, minWidth: 'inherit' }} className={CartItemCss.container}>
      <div className={CartItemCss.left}>
        <span className='text text--16'>{title}</span>
        <span className={`${statusClass} text--10 text--bold`}>
          {status}
        </span>
      </div>
      <div>
        <span className='text text--14'>
          {price}$
        </span>
      </div>
    </Card>
  )
}

export default CartItem
