import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDone',
  pure: false
})
export class FiltroDonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const done=args[0];
    if (!done) return value;
    if (!value) return null;
    let filtro = value.filter(item => item.done == !done);
    return filtro;
  }

}
