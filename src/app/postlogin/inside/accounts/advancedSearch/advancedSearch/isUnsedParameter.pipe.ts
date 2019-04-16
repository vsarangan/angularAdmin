import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isUnsedParameter'
})
export class IsUnsedParameterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(param => param.key === value.key && !param.allowMultiple).length === 0;
  }

}
