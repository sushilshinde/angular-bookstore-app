import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Book } from "./interface.book";

@Injectable({providedIn:"root"})
export class HttpService{

    constructor(private http:HttpClient){}

    onGetBooks(){
        return this.http.get<Book[]>('http://localhost:3000/books')
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