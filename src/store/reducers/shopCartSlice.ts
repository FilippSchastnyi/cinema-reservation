import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodsType, SeatType } from '@src/ts/types'

type ActionPayloadType = PayloadAction<SeatType | GoodsType>

const initialState: Array<SeatType | GoodsType> = []

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addItem: (state, action: ActionPayloadType) => {
      if ('status' in action.payload) {
        const newItemIndex = state.findIndex((item) => item.id === action.payload.id)
        if (newItemIndex !== -1){
          state.splice(newItemIndex, 1)
        }
        else {
          state.push(action.payload)
        }
      }
    },
    removeItem: (state, action: ActionPayloadType) => {
      const indexItem = state.indexOf(action.payload)
      state.splice(indexItem, 1)
    },
    reset: () => {
      return []
    },
  },
})

export default shopCartSlice.reducer
