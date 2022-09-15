import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxlength'
})
export class MaxlengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
   return value.substring(0,5) + '....';
  //  return value.length == 0 ? "error" : value;
  }

}
