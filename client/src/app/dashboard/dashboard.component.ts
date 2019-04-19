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
  add(name: string, author: string) {
    name = name.trim();
    author = author.trim();
    if(!name && !author) {
      return;
    }
    this.bookService.addBook({ name } as Book).subscribe(book => {this.books.push(book)});
  }
  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }

}
