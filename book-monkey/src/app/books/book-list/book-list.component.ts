import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../shared/book';

import { Store } from '@ngrx/store'
import { loadBooks } from '../store/book.actions';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books$?: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
  }
}