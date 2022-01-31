import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userActiveButton'
})
export class UserActiveButtonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value==false)?`Deactivate`:`Activate`;
  }

}
