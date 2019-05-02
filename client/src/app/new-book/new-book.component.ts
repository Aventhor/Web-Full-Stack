import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  add(name: string, author: string, img: string, desc: string, price: number): void {
    var name = name.trim();
    var author = author.trim();
    var description = desc;
    var price = price;
    var img = img;
    var newBook = new Book(name, author, img, description, price);
    console.log(newBook.author);
    this.bookService.addBook(newBook).subscribe();
    this.goBack();
  }
  goBack(): void {
    this.location.go('/panel')
  }
}
