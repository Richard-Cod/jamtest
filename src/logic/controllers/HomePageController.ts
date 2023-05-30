import { InMemoryArticleRepo } from "../interfaces/ArticleRepository/InMemoryArticleRepo";
import { Article } from "../models/Article";

class HomePageController{
    // IArticleRepository articleRepo ;

    HomePageController(){

    }

    async getArticles(): Promise<Article[] | null> {
        const repo = new InMemoryArticleRepo();
        const result = await repo.getAll()
        // if(result == null){
        //     coo
        // }
        return result;
    }

    async createArticle(article :Article) : Promise<boolean>{
        const repo = new InMemoryArticleRepo();
        const result =  await repo.create(article);
        return result;
    }

    async updateArticle(articleId :string) : Promise<boolean>{
        const repo = new InMemoryArticleRepo();
        const result =  await repo.update(articleId);
        return result;
    }

}
export {HomePageController}