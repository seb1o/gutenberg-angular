import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Book, Author } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookDetail: WritableSignal<{}> = signal({})

  page = 1;
  booksArray: WritableSignal<any[]> = signal([]);

  constructor() {
    this.getBookById(26184)
    this.getBooks()

  }

  getBooks() {
    const url = 'https://gutendex.com/books/?page=' + this.page;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const booksData = data.results;

        let books: Book[] = [];

        for (const bookObj of booksData) {
          const book: Book = {
            id: Number(bookObj.id),
            title: bookObj.title as string,
            authors: bookObj.authors as Author[],
            summaries: bookObj.summaries as string[],
            subjects: bookObj.subjects as string[],
            img: bookObj.formats['image/jpeg'] as string,
          }
          console.log(book);
          

          books.push(book)

        }

      this.booksArray.set(books);
  })
}

getBookById(id: number){
  const url = 'https://gutendex.com/books/' + id;
  fetch(url)
    .then(res => res.json())
    .then(book => {
      this.bookDetail.set(book);
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
