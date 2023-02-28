import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null, // where are you?
  destination: null, // where are you going?
  travelTimeInformation: null, // time to get from point A to B
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin(state, action) {
      state.origin = action.payload;
    },
    setDestination(state, action) {
      state.destination = action.payload;
    },
    setTravelTimeInformation(state, action) {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors : to pull info from here in the app
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
