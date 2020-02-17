import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ordenatareas',
  pure: false
})
export class OrdenaTareasPipe implements PipeTransform{
  transform(value: any, ...args: any[]): any {
    if(!value || value.length <2 ) return value;
    value.sort((a:any,b:any)=>{
      if(a.action.toLowerCase()<b.action.toLowerCase()) return -1;
      else if (a.action.toLowerCase()>b.action.toLowerCase()) return 1;
      else return 0;
    });
    return value;
  }

}
