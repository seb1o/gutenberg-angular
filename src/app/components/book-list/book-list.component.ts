import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { BookCardComponent } from '../book-card/book-card.component';
@Component({
  selector: 'app-book-list',
  imports: [CommonModule,BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  bookServ= inject(BookService);
  books: any[]= [];

  constructor(){
    effect(()=>{
      this.books = this.bookServ.booksArray();
    })
  }

}
