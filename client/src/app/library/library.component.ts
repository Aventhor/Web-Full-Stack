import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: [
    './library.component.css'
  ]
})
export class LibraryComponent implements OnInit {

  books: Book[];
  constructor(
    private bookService: BookService,
    private titleService: Title,
    ) { 
      this.titleService.setTitle("Библиотека");
    }

  ngOnInit() {
    this.getAllBooks();
  }
  getAllBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
