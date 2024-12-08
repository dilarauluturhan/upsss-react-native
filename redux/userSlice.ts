import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: any;
  lastname: any;
  email: any;
  password: any;
  isLoading: boolean;
}

// başlangıçta yüklenecek olan state'lerim
const initialState: UserState = {
  name: null,
  lastname: null,
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
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action) => {
      const lowerCaseEmail = action.payload.toLowerCase();
      state.email = lowerCaseEmail;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setName, setLastname, setEmail, setPassword, setIsLoading } =
  userSlice.actions;
export default userSlice.reducer;
