import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform
{

  transform(value: Array<string>, args: any[]): any
  {
    console.log(value, "pipe value")
    const sortField = args[0];
    console.log(sortField, "sortfield value")

    const sortDir = args[1];
    console.log(sortDir, "sortdir value")

    let multiplier = 1;
    if (sortDir === "descending") {
      multiplier = -1;
    }
    return value.sort((a: any, b: any) =>
    {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier
      }
      else if (a[sortField] > b[sortField]) {
        return 1 * multiplier
      }
      else {
        return 0

      }
      
    }

    );

  }
}
