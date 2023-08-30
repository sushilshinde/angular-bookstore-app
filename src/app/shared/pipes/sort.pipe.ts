// pipe is used to transform the output,here this pipe is used to sort the output assending or decending order

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform
{
  transform(value: Array<string>, args: any[]): any
  {
    const sortField = args[0];
    const sortDir = args[1];
    let multiplier = 1;
    if (sortDir === 'desc') {
      multiplier = -1;    //if sortDirection is decending,the return value multiplied with -1 value
    }
    return value.sort((a: any, b: any) =>
    {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      } else {
        return 0;
      }
    });
  }
}
