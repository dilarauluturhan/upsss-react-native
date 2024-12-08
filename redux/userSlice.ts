import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  email: any;
  password: any;
  isLoading: boolean;
}

// başlangıçta yüklenecek olan state'lerim
const initialState: UserState = {
  email: null,
  password: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // state, initialState'İ temsilen
  // action için, setEmail'i başka dosyalarda kullanıyo olmama action olarak gidiyor diyebiliriz
  // payload, action içinde gelen value'dur
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setEmail, setPassword, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
