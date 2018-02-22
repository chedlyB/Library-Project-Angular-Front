import { SearchBookService } from './../search-book.service';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import {IBook } from './Book'
import {StarComponent } from '../shared/Star.Component'
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  
  
})
export class BookListComponent  {


PageTitle : String ='Livres';
imageWidth : number = 100;
imageMargin : number =50;
listFilter : string = ''; 
Livres : IBook[];
errorMessage : String ; 
constructor(private _productService: BookService) {

}




ngOnInit() : void {

  this._productService.getBooks()
  .subscribe( 
    Books => this.Livres = Books,
    error => this.errorMessage = <any>error) ; 
    console.log("1"+this.Livres) ; 
 }





 search(v : HTMLInputElement ) {
  let Book : IBook [] ; 
  this._productService.SearchBooks(v)
  .subscribe(  Books => this.Livres = Books
     ,
  error=>this.errorMessage = <any>error) ; 


  console.log(this.Livres) ; 
  }

 

}
