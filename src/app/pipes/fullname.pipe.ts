import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(value: String, lastName: String): unknown {
    return `${value} ${lastName}`;
  }
}
