import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  books: Book[];
  constructor(
    private bookService: BookService,
    private titleService: Title,
    ) {
      this.titleService.setTitle("Панель управления");
     }

  ngOnInit() {
    this.getAllBooks();
  }
  getAllBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }
}
