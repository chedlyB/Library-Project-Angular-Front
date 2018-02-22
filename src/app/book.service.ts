import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http' ; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IBook } from './book-list/Book';
@Injectable()
export class BookService {
       private _bookUrl = 'https://localhost:44353/api/Books1';
      

  constructor(private _http : Http) { }



  getBooks(): Observable<IBook[]> {

    return this._http.get(this._bookUrl)
         .map((response:Response) => <IBook[]>response.json())
         .do(data => console.log('ALL:' + JSON.stringify(data)))
         .catch(this.handleError);
  }

  SearchBooks( alpha : HTMLInputElement ): Observable<IBook[]> {
   let v = alpha.value.toString() ; 
    return this._http.get(this._bookUrl+'/'+v) 
         .map((response:Response) => <IBook[]>response.json())
         .do(data => console.log('ALL:' + JSON.stringify(data)))//
         .catch(this.handleError);
  }

    private handleError(error : Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error') ;

    }


}
