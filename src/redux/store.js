// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./slices/companySlice";

export default configureStore({
  reducer: {
    companies: companySlice,
  },
});
