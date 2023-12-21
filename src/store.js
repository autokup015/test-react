import { configureStore } from "@reduxjs/toolkit";

import typeSlice from "./typeSlice";

export default configureStore({
  reducer: {
    type: typeSlice,
  },
});
