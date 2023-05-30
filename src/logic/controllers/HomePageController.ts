import { InMemoryArticleRepo } from "../interfaces/ArticleRepository/InMemoryArticleRepo";
import { NodeJsArticleRepo } from "../interfaces/ArticleRepository/NodeJsArticleRepo";
import { Article } from "../models/Article";


const repo = new InMemoryArticleRepo();

class HomePageController{
  async  deleteArticle(id: string) {
        
        const result =  await repo.delete(id);
        return result;
    }
    // IArticleRepository articleRepo ;

    HomePageController(){

    }

    async getArticles(): Promise<Article[] | null> {
        
        const result = await repo.getAll()
        // if(result == null){
        //     coo
        // }
        return result;
    }

    async createArticle(article :Article) : Promise<boolean>{
        
        const result =  await repo.create(article);
        return result;
    }

    async updateArticle(articleId :string , article : Article) : Promise<boolean>{
        
        const result =  await repo.update(articleId,article);
        return result;
    }

}
export {HomePageController}