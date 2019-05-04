import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, JsonpClientBackend } from '@angular/common/http';
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
    return this.http.get<Book[]>('/api/library/');
  }
  getPopularBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/dashboard/');
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>('/api/books/' + id);
  }
  getRandomBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/dashboard/random/');
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('/api/panel/new/', book, httpOptions);
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>('/api/panel/edit/' + id, httpOptions);
  }
  updateBook(book: Book): Observable<any> {
    return this.http.put<Book>('/api/panel/edit/', book, httpOptions);
  }
  searchBooks(term: string): Observable<Book[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>('/api/search/?name=' + term);
  }
}
