import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book!: Book;

  constructor(private bs: BookStoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('isbn')).subscribe(b => this.book = b);
  }

  getRating(num: number): number[] {
    return new Array(num);
  }

  removeBook(): void {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book?.isbn).subscribe(
        res => this.router.navigate(
            ['../'],
            {relativeTo: this.route}
        )
      );
    }
  }
}
