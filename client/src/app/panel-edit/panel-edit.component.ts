import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-panel-edit',
  templateUrl: './panel-edit.component.html',
  styleUrls: ['./panel-edit.component.css']
})
export class PanelEditComponent implements OnInit {

  @Input() book: Book;
  id = +this.route.snapshot.paramMap.get('id');
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getBook();
  }
  getBook(): void {
    this.bookService.getBook(this.id).subscribe(book => this.book = book);
  }
  delete(book: Book): void {
    this.bookService.deleteBook(this.id).subscribe(() => this.goBack());
  }
  edit(): void {
    this.bookService.updateBook(this.book, this.id).subscribe();
    this.goBack();
  }
  goBack(): void {
    this.location.go('/panel');
  }

}
