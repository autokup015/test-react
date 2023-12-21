import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
  name: "type",
  initialState: {
    type: "",
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { changeType } = typeSlice.actions;
export default typeSlice.reducer;
