import { selectAllBooks } from './book.selectors';
import { book } from './my-test-helper';

describe('Book Selectors', () => {
  it('should select all books', () => {
    const books = [book(1), book(2), book(3)];
    const state = {
      book: {
        books,
        loading: false
      }
    };

    const result = selectAllBooks(state);
    expect(result).toEqual(books);
  });
});