import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HomePageController } from "../controllers/HomePageController";
import { RootState } from "./store";
import { Article } from "../models/Article";

interface GeneralState {
    articles : Article[] | null
}

const initialState: GeneralState = {
    articles: null
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
    setArticles: (state , action: PayloadAction<Article[]>) => {
        console.log("ibkbkjbkj")
        state.articles = action.payload;
        console.log("ajouté dans le state");
    },

    addArticle: (state , action: PayloadAction<Article>) => {
        if(state.articles){
            state.articles = [...state.articles,action.payload]
            return;
        }
        state.articles = [action.payload];
    }
    },
  })


export const {setArticles, addArticle } = generalSlice.actions


  export const selectArticles = (state: RootState) => state.generalReducer.articles

export default generalSlice.reducer
