import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const chefSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = chefSlice.actions;
export default chefSlice.reducer;
