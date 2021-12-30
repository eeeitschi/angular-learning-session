import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { BookStoreService } from './book-store.service';

@Injectable({
  providedIn: 'root'
})
export class BookExistsValidatorsService implements AsyncValidator {

  constructor(private bs: BookStoreService) { }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
      return this.bs.check(control.value).pipe(
        map(exists => (exists === false) ? null : {
          isbnExists: { valid: false }
        }),
        catchError(() => of(null))
      );
    }
}
