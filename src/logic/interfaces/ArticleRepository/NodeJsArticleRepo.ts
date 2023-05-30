import axios from "axios";
import { Article } from "../../models/Article";
import { IArticleRepository } from "./IArticleRepository";
const backend = "http://localhost:8000";


class NodeJsArticleRepo implements IArticleRepository{
    create(article: Article): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<Article[] | null> {
        const response =  await axios.get(backend+"/article/all")
        const result = response.data;

        const clone =  result.map((el : any) => {
            return {...el,id:el._id};
        });


        if(response.status == 200){
            return clone;
        }
        return null
    }
    getOne(title: String): Promise<Article | null> {
        throw new Error("Method not implemented.");
    }
    async delete(id: String): Promise<boolean> {
        const response =  await axios.delete(backend+"/article/"+id)
        const result = response.data as Article[];
        if(response.status == 200){
            return true;
        }
        return false;
    }
    async update(id: String,data: Article): Promise<boolean> {
        const response =  await axios.put(backend+"/article/"+id,data)
        const result = response.data;
        console.log(result)
        if(response.status == 200){
            return true;
        }
        return false;
    }
    
}

export {NodeJsArticleRepo}