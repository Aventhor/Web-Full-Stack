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
  rBooks: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
    this.getRandomBooks();
  }
  getAllBooks(): void {
    this.bookService.getPopularBooks().subscribe(books => this.books = books);
  }
  getRandomBooks(): void {
    this.bookService.getRandomBooks().subscribe(books => this.rBooks = books);
  }
}
