import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {HomePageController} from "./logic/controllers/HomePageController"
import { Article } from './logic/models/Article';
import { selectHomePageController } from './logic/redux/controllers';
import { useAppDispatch, useAppSelector } from './logic/redux/reduxhooks';
import { IArticleRepository } from './logic/interfaces/ArticleRepository/IArticleRepository';
import moment from 'moment';
import { OUR_DATE_FORMAT } from './constants';
import ArticleForm from './components/CreateArticleForm';
import { selectArticles, setArticles } from './logic/redux/general';
import AppRouter from './router';


function App() {
  const homePageController = useAppSelector(selectHomePageController)
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();


  useEffect(() => {

    const asyncFunc = async() => {
     var result =await  homePageController.getArticles();
    //  console.log(result)
     if(result == null) return;
 
     dispatch(setArticles(result))
    //  console.log("kbkb")
    }
 
    asyncFunc()
 
   }, [])

  
  return (
      <AppRouter />
  );
}

export default App;



