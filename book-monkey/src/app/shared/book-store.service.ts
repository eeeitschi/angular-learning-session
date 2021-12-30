import { Injectable } from '@angular/core';
import { Book } from './book';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://api4.angular-buch.com/secure';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        map(booksRaw => booksRaw.map(b => BookFactory.fromRaw(b)),
      )
    );
  }

  getSingle(isbn: string | null): Observable<Book> {
    return this.http.get<BookRaw>(
      `${this.api}/book/${isbn}`
      ).pipe(
        retry(3),
        map(b => BookFactory.fromRaw(b)),
        catchError(this.errorHandler)
      );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(
      `${this.api}/book/${isbn}`, 
      { responseType: 'text'}
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten');
    return throwError(error);
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
    return this.http.get<BookRaw[]>(
      `${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map(booksRaw => booksRaw.map(b => BookFactory.fromRaw(b)),
        ),
        catchError(this.errorHandler)
      );
  }
}
