import { UserStateType } from '@src/store/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@src/ts/types';

const initialState: UserStateType = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser: (state:UserStateType, action: PayloadAction<UserType>) => {
      state.data = action.payload;
    },
    logOutUser: (state:UserStateType) => {
      state.data = null;
    },
  },
});

export default userSlice.reducer;
