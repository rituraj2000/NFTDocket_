import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: null,
    },
  },

  reducers: {
    SetUser: (state, actions) => {
      state.user.id = actions.payload;
    },
  },
});

export const { SetUser } = userSlice.actions;

export default userSlice.reducer;
