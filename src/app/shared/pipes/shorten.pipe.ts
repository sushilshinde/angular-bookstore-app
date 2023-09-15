//pipe is used to transform the output. here this shorten pipe  will do shorten the text displayed in ui
//it will take one argument with type number, for number of characters to displayed
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shorten', pure: false })
export class shortenPipe implements PipeTransform
{
    transform(value: any, data: number)
    {//it will take number type argument 
        if (value?.length > data) {
            return value.substr(0, data) + "..."
        }
        else {
            return value
        }
    }

}