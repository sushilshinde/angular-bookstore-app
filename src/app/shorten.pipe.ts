import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'shorten',pure:false})
export class shortenPipe implements PipeTransform{
    transform(value: any) {
        if(value.length>15){
            return value.substr(0,15)+"..."
        }
        else{
            return value
        }
    }

}