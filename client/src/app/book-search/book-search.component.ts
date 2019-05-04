import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap, distinctUntilKeyChanged
} from 'rxjs/operators';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books$: Observable<Book[]>;
  private searchTerms = new Subject<string>();
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.bookService.searchBooks(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
    console.log(term);
  }
  clearSearch(): void {
    var books: Observable<Book[]>;
    this.books$ = books;
  }
}
