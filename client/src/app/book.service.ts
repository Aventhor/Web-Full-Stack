import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Book } from './book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/dashboard/');
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>('/api/books/' + id);
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('/api/dashboard/', book, httpOptions);
  }
  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>("/api/dashboard", httpOptions);
  }
}
