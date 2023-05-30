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
import PaginatedArticles from '../components/PaginatedArticles';


function AdminHomePage() {
  const homePageController = useAppSelector(selectHomePageController)
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  // const homePageController = new HomePageController();



  const navigate = useNavigate()

  
  return (
    <div className="App px-5 py-5">
<h1>Liste des articles</h1>

<PaginatedArticles />
{/* <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">content</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
  

    {articles?.map((article,i) => {

return   <tr  key={i}>
<th scope="row">1</th>
<td>{article.title}</td>
<td>{moment(article.date).format(OUR_DATE_FORMAT)} </td>
<td> {article.image && <img src={article.image } />} </td>
</tr>

          // ee return <li onClick={() => {
          //   navigate(ROUTES.toarticleDetails(article.title))
         
          // }} key={i}>   {article.title} - {moment(article.date).format(OUR_DATE_FORMAT)} </li>


        })}

  </tbody>
</table> */}
{/* 
      <ul>
        {articles?.map((article,i) => {
          return <li onClick={() => {
            navigate(ROUTES.toarticleDetails(article.title))
         
          }} key={i}>   {article.title} - {moment(article.date).format(OUR_DATE_FORMAT)} </li>
        })}
      </ul> */}
<h1>Créer un article</h1>

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



