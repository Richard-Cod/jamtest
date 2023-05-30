import React,{useState,useEffect} from 'react';

import {HomePageController} from "../logic/controllers/HomePageController"
import { Article } from '../logic/models/Article';
import { selectHomePageController } from '../logic/redux/controllers';
import { useAppDispatch, useAppSelector } from '../logic/redux/reduxhooks';
import { IArticleRepository } from '../logic/interfaces/ArticleRepository/IArticleRepository';
import moment from 'moment';
import { OUR_DATE_FORMAT, ROUTES } from '../constants';
import ArticleForm from '../components/CreateArticleForm';
import { addArticle, selectArticles, setArticles } from '../logic/redux/general';
import { Navigate, useNavigate } from 'react-router-dom';


function AdminHomePage() {
  const homePageController = useAppSelector(selectHomePageController)
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  // const homePageController = new HomePageController();



  const navigate = useNavigate()

  
  return (
    <div className="App">
      <ul>
        {articles?.map((article,i) => {
          return <li onClick={() => {
            navigate(ROUTES.toarticleDetails(article.title))
         
          }} key={i}>   {article.title} - {moment(article.date).format(OUR_DATE_FORMAT)} </li>
        })}
      </ul>

      <hr></hr>
      <ArticleForm 
      initialValuesProp={null}
      onSubmitProp={async (values : any)=> {
            const {title,content ,image} = values;
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString();
            console.log(formattedDate);
        
            const articleToCreate = {
              title,
              content,
              image,
              id : null,
              date:  formattedDate
          };
        
            const result = await homePageController.createArticle(articleToCreate)
            if(result){
                alert("ok enregistré")
                dispatch(addArticle(articleToCreate));
        
            }
        
      }} />
    
    </div>
  );
}

export default AdminHomePage;



