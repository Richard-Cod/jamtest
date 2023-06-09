import React,{useState,useEffect} from 'react';

import {HomePageController} from "../logic/controllers/HomePageController"
import { Article } from '../logic/models/Article';
import { selectHomePageController } from '../logic/redux/controllers';
import { useAppDispatch, useAppSelector } from '../logic/redux/reduxhooks';
import { IArticleRepository } from '../logic/interfaces/ArticleRepository/IArticleRepository';
import moment from 'moment';
import { OUR_DATE_FORMAT, ROUTES } from '../constants';
import ArticleForm from '../components/CreateArticleForm';
import { deleteArticle, selectArticles, setArticles, updateArticle } from '../logic/redux/general';
import { Navigate, useNavigate, useParams } from 'react-router-dom';


function AdminArticleDetailPage() {
  const homePageController = useAppSelector(selectHomePageController)
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const { articleTitle } = useParams();
  const currentArticle = articles?.find((e)=> articleTitle == e.title);


// useEffect(() => {
//   const result = articles?.find((e)=> articleTitle == e.title);
//   console.log("currentArticle")
//   console.log(result)
//   setcurrentArticle(result);
// }, [])


  return (
    <div className="App">

      {articleTitle}

      
     {currentArticle && <ArticleForm onSubmitProp={async(values : Article)=> {
        if(currentArticle?.id == null) return;
         const result = await homePageController.updateArticle(currentArticle?.id,values);
         if(result){
          dispatch(updateArticle({...values,id:currentArticle.id}))
          navigate(ROUTES.adminHomePage)

         }
      }}
      initialValuesProp={currentArticle}
      
      />}

      <button onClick={async ()=> {
        if(currentArticle?.id == null) return;
        const result = await homePageController.deleteArticle(currentArticle?.id);
        if(result){
          dispatch(deleteArticle(currentArticle?.id))
        navigate(ROUTES.adminHomePage)
        }

       

      }}>Supprimer cet article </button>
    
    </div>
  );
}

export default AdminArticleDetailPage;



