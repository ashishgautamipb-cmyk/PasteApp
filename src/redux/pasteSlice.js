import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,

  reducers: {
    // Add Paste
    addToPastes: (state, action) => {
      const paste = action.payload;

      state.pastes.push(paste);

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );

      toast.success("Paste Created Successfully");
    },

    // Update Paste
    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;

      const index = state.pastes.findIndex(
        (item) => item._id === updatedPaste._id
      );

      if (index >= 0) {
        state.pastes[index] = updatedPaste;

        localStorage.setItem(
          "pastes",
          JSON.stringify(state.pastes)
        );

        toast.success("Paste Updated Successfully");
      }
    },

    // Remove Paste
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      state.pastes = state.pastes.filter(
        (item) => item._id !== pasteId
      );

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );

      toast.success("Paste Deleted Successfully");
    },

    // Reset All Pastes
    resetAllPastes: (state) => {
      state.pastes = [];

      localStorage.removeItem("pastes");

      toast.success("All Pastes Removed Successfully");
    },
  },
});

export const {
  addToPastes,
  updateToPastes,
  removeFromPastes,
  resetAllPastes,
} = pasteSlice.actions;

export default pasteSlice.reducer;