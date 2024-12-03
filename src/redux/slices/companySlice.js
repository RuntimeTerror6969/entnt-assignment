// redux/slices/companySlice.js
import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "companies",
  initialState: [],
  reducers: {
    addCompany(state, action) {
      state.push(action.payload);
    },
    updateCompany(state, action) {
      const index = state.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteCompany(state, action) {
      return state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCompany, updateCompany, deleteCompany } =
  companySlice.actions;
export default companySlice.reducer;
