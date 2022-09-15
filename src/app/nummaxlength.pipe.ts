import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nummaxlength'
})
export class NummaxlengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.length > 10 ? "error" : value;
  }

}
