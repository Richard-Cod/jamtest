import { Article } from "../../models/Article";
import { IArticleRepository } from "./IArticleRepository";

class InMemoryArticleRepo implements IArticleRepository{
    create(article: Article): Promise<boolean> {
       return Promise.resolve(true);
    }
    getAll(): Promise<Article[] | null> {
        const defaultArticle = {
            id : "1",
            title : "title1",
            content : "content",
            date : "2023-05-30T12:01:51.141Z",
            image : "",
        };

        const result = [
        defaultArticle,
        {...defaultArticle,title:"Title2",date:"2023-05-30T12:02:51.141Z",id:"1"},
        {...defaultArticle,title:"Title3",date:"2023-05-30T12:03:51.141Z",id:"2"},
        {...defaultArticle,title:"Title4",date:"2023-05-30T12:04:51.141Z",id:"3"},
        {...defaultArticle,title:"Title5",date:"2023-05-30T11:05:51.141Z",id:"4"},
        {...defaultArticle,title:"Title6",date:"2023-05-30T12:06:51.141Z",id:"5"},
    ]

    const sortedResult = result.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    console.log(sortedResult);


        return Promise.resolve(sortedResult)
    }
    getOne(title: String): Promise<Article | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<boolean> {
       return Promise.resolve(true);
        
    }
    update(id: String,article:Article): Promise<boolean> {
        return Promise.resolve(true);
    }
}


export {InMemoryArticleRepo}