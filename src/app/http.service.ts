import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Book } from "./interface.book";
import { environment } from "../environment/environment.dev";
@Injectable({providedIn:"root"})
export class httpService{

    constructor(private http:HttpClient){}
    private URL = environment.apiURL
    onGetBooks(){
        return this.http.get<Book[]>(this.URL + '/books')
    }
    oNGetTrendingBooks(){
        return this.http.get<Book[]>('http://localhost:3000/books')
        .pipe(
            map((Resp)=>{
                const dataArray=[];
                for(const data of Resp){
                    if( data.categories.includes("Trending")){
                        dataArray.push({...data})
                    }
                }
                return dataArray;
            })
            
        )
    }
    oNGetBestOffersBooks(){
        return this.http.get<Book[]>('http://localhost:3000/books')
        .pipe(
            map((Resp)=>{
                const dataArray=[];
                for(const data of Resp){
                    if( data.discount){
                        dataArray.push({...data})
                    }
                }
                return dataArray;
            })
            
        )
    }
}