import { Injectable } from '@angular/core';
import { Book } from './book';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://api4.angular-buch.com';

  constructor(private http: HttpClient) {
  
  }

  getAll(): Book[] {
    return this.books;
  }

  getSingle(isbn: string | null): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
}
