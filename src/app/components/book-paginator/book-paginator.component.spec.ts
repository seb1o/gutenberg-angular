import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPaginatorComponent } from './book-paginator.component';

describe('BookPaginatorComponent', () => {
  let component: BookPaginatorComponent;
  let fixture: ComponentFixture<BookPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
