import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-paginator',
  imports: [],
  templateUrl: './book-paginator.component.html',
  styleUrl: './book-paginator.component.scss'
})
export class BookPaginatorComponent {

  bookServ = inject(BookService);

  nextPage(){
    this.bookServ.next()
  }
  
  prevPage(){
    this.bookServ.prev()
  }

}
