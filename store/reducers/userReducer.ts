import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserTypes {
  id: string;
  userName: string;
  email: string;
}
export interface UserState {
  user: UserTypes;
}

const initialState: UserState = {
  user: {
    id: '',
    userName: '',
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserTypes>) => {
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
