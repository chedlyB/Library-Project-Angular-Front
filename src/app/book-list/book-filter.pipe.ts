


import { Injectable, Pipe, PipeTransform } from '@angular/core';
import {IBook} from './Book';
@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class BookFilterPipe implements PipeTransform {

    transform(value: IBook[], args: string ): IBook[] {
    let filter : string = args ? args.toLocaleLowerCase() : null;
    return filter ? value.filter((book : IBook) => book.bookName.toLocaleLowerCase()
    .indexOf(filter) != -1) : value;
 }
}

