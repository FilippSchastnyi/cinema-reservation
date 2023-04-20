import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodsType, SeatType } from '@src/ts/types'
import cartItem from '@pages/Booking/CinemaShoppingCart/CartItem/CartItem'

type ActionPayloadType = PayloadAction<SeatType | GoodsType>
type ShopCartStateType = {
  cartItems: Array<SeatType | GoodsType>
  totalPrice: number
}

const initialState: ShopCartStateType = {
  cartItems: [],
  totalPrice: 0,
}

const findItemIndex = (
  cartItems: Array<SeatType | GoodsType>,
  itemId: string
): number => {
  return cartItems.findIndex((item) => item.id === itemId)
}

const addSeat = (state: ShopCartStateType, payload: SeatType): void => {
  state.cartItems.push(payload)
}

const removeSeat = (state: ShopCartStateType, payload: SeatType): void => {
  const itemIndex = findItemIndex(state.cartItems, payload.id)
  state.cartItems.splice(itemIndex, 1)
}

const addGoodsItem = (state: ShopCartStateType, payload: GoodsType): void => {
  const itemIndex = findItemIndex(state.cartItems, payload.id)
  const cartItem = state.cartItems[itemIndex]

  if (!cartItem) {
    state.cartItems.push({
      ...payload,
      count: 1,
    })
  } else {
    cartItem.count += 1
    cartItem.price += payload.price
  }
}

const removeGoodsItem = (
  state: ShopCartStateType,
  payload: GoodsType
): void => {
  const itemIndex = findItemIndex(state.cartItems, payload.id)
  const cartItem = state.cartItems[itemIndex]
  cartItem.count -= 1
  if (cartItem.count === 0) {
    state.cartItems.splice(itemIndex, 1)
  }
  cartItem.price -= payload.price
}

const calculateTotal = (state: ShopCartStateType): any => {
  const total = state.cartItems.reduce((acc, item) => {
    return acc + item.price
  }, 0)
  return total
}

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addItem: (state, action: ActionPayloadType) => {
      const { payload } = action
      const hasSeatNumber = !!payload.seatNumber

      if (hasSeatNumber) {
        addSeat(state, payload as SeatType)
      } else {
        addGoodsItem(state, payload as GoodsType)
      }
      state.totalPrice = calculateTotal(state)
    },
    removeItem: (state, action: ActionPayloadType) => {
      const { payload } = action
      const hasSeatNumber = !!payload.seatNumber

      if (hasSeatNumber) {
        removeSeat(state, payload as SeatType)
      } else {
        removeGoodsItem(state, payload as GoodsType)
      }
      state.totalPrice = calculateTotal(state)
    },
    resetCartItems: (state) => {
      state.cartItems = []
      state.totalPrice = 0
    },
  },
})

export default shopCartSlice.reducer
