import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookPaginatorComponent } from './components/book-paginator/book-paginator.component';
import { BookListComponent } from './components/book-list/book-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BookPaginatorComponent,BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gutenberg-angular';
}
