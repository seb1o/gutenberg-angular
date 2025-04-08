import { Component, effect, inject } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  bookServ = inject(BookService)
  book = {};

  constructor(){
    effect(() =>{
      this.book = this.bookServ.bookDetail();
      console.log(this.book)
    })
  }

}
