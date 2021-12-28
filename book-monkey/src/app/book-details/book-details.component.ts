import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book!: Book;

  @Output() showListEvent = new EventEmitter<any>();
  

  ngOnInit(): void {
  }

  getRating(num: number): number[] {
    return new Array(num);
  }

  showBookList(): void {
    this.showListEvent.emit();
  }

}
