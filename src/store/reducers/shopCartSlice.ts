import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {GoodsType, TicketType} from "@src/ts/types"

type ActionPayloadType = PayloadAction<TicketType | GoodsType>;

const initialState: Array<TicketType | GoodsType | null> = []

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addItem: (state, action:ActionPayloadType) => {
      state.push(action.payload)
    },
    removeItem: (state, action:ActionPayloadType) => {
      const indexItem = state.indexOf(action.payload)
      state.splice(indexItem, 1)
    },
    reset: () => {
      return []
    },
  },
})

export default shopCartSlice.reducer
