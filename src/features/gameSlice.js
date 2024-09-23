import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../utils/formulas";

const initialState = {
  angle: 45,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    moveObjects: (state, action) => {
      if(!action.payload) return state;
      const { x, y } = action.payload;
      const angle = calculateAngle(0, 0, x, y);
      state.angle = angle;
    }
  }
})


export const { moveObjects } = gameSlice.actions;
export default gameSlice.reducer;
