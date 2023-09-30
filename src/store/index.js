import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./chefSlice";

const index = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default index;
