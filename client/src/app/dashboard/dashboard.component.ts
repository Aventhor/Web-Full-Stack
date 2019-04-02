import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
