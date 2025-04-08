import { Injectable, signal, WritableSignal } from '@angular/core';
import { Book, Author } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {


  page = 1;
  booksArray: WritableSignal<any[]> = signal([]);
  constructor() { 
    this.getBooks()
    
  }

  getBooks() {
    const url = 'https://gutendex.com/books/?page=' + this.page;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const books = data.results.map((book: any) => ({
          title: book.title,
          author: book.authors?.[0]?.name || 'Unknown Author',
          image: book.formats['image/jpeg'] || 'default-image-url.jpg' // Use a default image if none is available
        }));
        this.booksArray.set(books);
      });
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
