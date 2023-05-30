import { Article } from "../../models/Article"

interface IArticleRepository{
    create(article:Article) : Promise<boolean>,
    getAll() : Promise<Article[]|null>,
    getOne(title : String) : Promise<Article|null>,
    delete(id : String) : Promise<boolean>,
    update(id : String) :Promise<boolean>,
}

export type {IArticleRepository}