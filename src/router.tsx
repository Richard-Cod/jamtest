import { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ROUTES } from './constants';
import AdminHomePage from "./pages/AdminHomePage"
import AdminArticleDetailPage from './pages/AdminArticleDetailPage';

function AppRouter() {

  
  return (
    <Router>
        <Routes>
          <Route path={ROUTES.adminHomePage} element={<AdminHomePage />} />
          <Route path={ROUTES.articleDetails} element={<AdminArticleDetailPage />} />



        </Routes>
    </Router>
  );
}

export default AppRouter;