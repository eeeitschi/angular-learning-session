import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
   @Input() book!: Book;

  ngOnInit(): void {
  }

}
