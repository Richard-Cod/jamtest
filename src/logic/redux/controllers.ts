import { createSlice } from "@reduxjs/toolkit";
import { HomePageController } from "../controllers/HomePageController";
import { RootState } from "./store";

interface ControllersState {
    homePageController : HomePageController
}

const initialState: ControllersState = {
    homePageController: new HomePageController()
}

export const controllerSlice = createSlice({
    name: 'controllers',
    initialState,
    reducers: {
    },
  })


  export const selectHomePageController = (state: RootState) => state.controllers.homePageController

export default controllerSlice.reducer
