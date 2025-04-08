import { Component, inject, Input } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-book-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() bookInput!: any;
 
 bookServ = inject(BookService)
  openDetail(id: number){
    this.bookServ.getBookById(id)
    
  }
}