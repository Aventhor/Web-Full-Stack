import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private bookService: BookService,
    private location: Location,
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.getBook();
  }
  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => { 
      this.book = book;
      if(this.book) {
      this.titleService.setTitle(this.book.name); 
      }
      else {
        this.location.go('/404');
      }
    });
  }
  goBack(): void {
    this.location.back();
  }
}
