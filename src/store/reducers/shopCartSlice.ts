import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodsType, SeatType } from '@src/ts/types'

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

const addOrRemoveSeat = (state: ShopCartStateType, payload: SeatType): void => {
  const { seatNumber, ...item } = payload
  const itemIndex = findItemIndex(state.cartItems, item.id)
  const isItemExist = itemIndex !== -1

  if (isItemExist) {
    state.cartItems.splice(itemIndex, 1)
  } else {
    state.cartItems.push(payload)
  }
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
        addOrRemoveSeat(state, payload as SeatType)
      } else {
        addGoodsItem(state, payload as GoodsType)
      }

      state.totalPrice = calculateTotal(state)
    },
    removeItem: (state, action: ActionPayloadType) => {
      const indexItem = state.cartItems.indexOf(action.payload)
      state.cartItems.splice(indexItem, 1)
    },
    reset: (state) => {
      return state
    },
  },
})

export default shopCartSlice.reducer
