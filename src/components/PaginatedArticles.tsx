import React, { useState } from 'react';
import { selectArticles } from '../logic/redux/general';
import { useAppSelector } from '../logic/redux/reduxhooks';
import moment from 'moment';
import { OUR_DATE_FORMAT } from '../constants';

const PaginatedArticles = () => {
  const pageSize = 2; // Nombre d'articles à afficher par page
  const [currentPage, setCurrentPage] = useState(1);

  // Liste des articles
  const articles =  useAppSelector(selectArticles);
  if(articles == null) return null

  // Pagination
  const totalPages = Math.ceil(articles.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = articles.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber : any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">content</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
  

    {currentArticles?.map((article,i) => {

return   <tr  key={i}>
<th scope="row">1</th>
<td>{article.title}</td>
<td>{moment(article.date).format(OUR_DATE_FORMAT)} </td>
<td> {article.image && <img src={article.image } />} </td>
</tr>

        })}

  </tbody>
</table>


<nav aria-label="Page navigation example">
  <ul className="pagination">
    
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    {Array.from({ length: totalPages }, (_, index) => (
       
    <li 
    key={index + 1}
    onClick={() => handlePageChange(index + 1)}
    // disabled={currentPage === index + 1}
    
    className="page-item"><a className="page-link" href="#"> {index + 1}</a></li>
        ))}

    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>



    </div>
  );
};

export default PaginatedArticles;

// <table className="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Title</th>
//       <th scope="col">content</th>
//       <th scope="col">image</th>
//     </tr>
//   </thead>
//   <tbody>
  

//     {articles?.map((article,i) => {

// return   <tr  key={i}>
// <th scope="row">1</th>
// <td>{article.title}</td>
// <td>{moment(article.date).format(OUR_DATE_FORMAT)} </td>
// <td> {article.image && <img src={article.image } />} </td>
// </tr>

//           // ee return <li onClick={() => {
//           //   navigate(ROUTES.toarticleDetails(article.title))
         
//           // }} key={i}>   {article.title} - {moment(article.date).format(OUR_DATE_FORMAT)} </li>


//         })}

//   </tbody>
// </table>