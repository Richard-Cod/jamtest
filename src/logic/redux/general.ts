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
    },
    deleteArticle: (state , action: PayloadAction<String>) => {
        if(state.articles){
            console.log(action.payload)
            state.articles = state.articles.filter((e) => e.id != action.payload);
            console.log("done removing")
        }
    },
    updateArticle: (state , action: PayloadAction<Article>) => {
        if(state.articles == null) return;
        const newArticle = action.payload;

        var index = state.articles
        ?.findIndex((element) => newArticle.id == element.id);
        console.log(index);

        if (index != -1) {
        const clones = [...state.articles];
        clones[index] = newArticle;
        state.articles = clones;
        }

        // if(state.articles){
        //     state.articles = [...state.articles,action.payload]
        //     return;
        // }
        // state.articles = [action.payload];
    }
    },
  })


export const {setArticles, addArticle,updateArticle,deleteArticle } = generalSlice.actions


  export const selectArticles = (state: RootState) => state.generalReducer.articles

export default generalSlice.reducer
