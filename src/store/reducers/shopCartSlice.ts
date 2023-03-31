import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodsType, SeatType } from '@src/ts/types'

type ActionPayloadType = PayloadAction<SeatType | GoodsType>

const initialState: { cartItems:Array<SeatType | GoodsType>, totalPrice: number } = {
  cartItems: [],
  totalPrice: 0
}

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addItem: (state, action: ActionPayloadType) => {
      const newItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if ('status' in action.payload) {
        if (newItemIndex !== -1) {
          state.cartItems.splice(newItemIndex, 1)
        } else {
          state.cartItems.push(action.payload)
        }
      }
      else {
        if (newItemIndex !== -1){
          Object.values(state.cartItems).forEach((item:any) => {
            if (item.id === action.payload.id){
              item.count += 1;
              item.price += action.payload.price
            }
          })
        }
        else {
          state.cartItems.push(action.payload)
        }
      }
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
