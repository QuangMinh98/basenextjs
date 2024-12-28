import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TCount = {
  count: number;
};

const initialState = {
    count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    setCount: (state: TCount, action: PayloadAction<number>) => {
      state = { ...state, count: action.payload };
      return state;
    },
  },
});

export const { setCount } = countSlice.actions;

export default countSlice.reducer;
