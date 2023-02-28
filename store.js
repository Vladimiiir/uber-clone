import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
// import restaurantReducer from "./features/restaurantSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    // restaurant: restaurantReducer,
  },
});
