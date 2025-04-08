import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookFooterComponent } from './components/book-footer/book-footer.component';
import { BookHeaderComponent } from './components/book-header/book-header.component';
import { DetailComponent } from './components/detail/detail.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BookListComponent,BookFooterComponent,BookHeaderComponent, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gutenberg-angular';
}
