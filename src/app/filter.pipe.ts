import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(people: any, search?: any): any {
    if(search === undefined) return people;
    return people.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
  }

}
