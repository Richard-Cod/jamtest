import { Article } from "../../models/Article";
import { IArticleRepository } from "./IArticleRepository";

class NodeJsArticleRepo implements IArticleRepository{
    create(article: Article): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Article[] | null> {
        throw new Error("Method not implemented.");
    }
    getOne(title: String): Promise<Article | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: String): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}

export {NodeJsArticleRepo}