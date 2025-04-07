import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  page = 1;
  booksArray: WritableSignal<any[]> = signal([]);
  constructor() { 
    this.getBooks()
    
  }

  getBooks(){
    const url ='https://gutendex.com/books/?page=' + this.page;
     fetch(url)
     .then(res => res.json())
     .then(data => {
      const books = data.results;
      this.booksArray.set(books);
     })
  }

  next(){
    this.page++;
    this.getBooks();
  }

  prev(){
    this.page--;
    this.getBooks();
  }

}
