import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const MainSlice = createSlice({
  name: "MAIN_SLICE",
  initialState: initialState,
  reducers: {
    handleClick: (state,action)=>{
        state.modal=true
        state.obj=action.payload
    },
    overlayFunc: (state)=>{
        state.modal=false
    }
  }
})

export const Data = MainSlice.reducer;
export const {handleClick,overlayFunc} = MainSlice.actions;