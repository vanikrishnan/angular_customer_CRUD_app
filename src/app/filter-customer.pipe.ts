import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './model/customer';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {

  transform(items: any[], searchText: string): Customer[] {
    if (!items) return [];
    if (!searchText) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
   }

}
