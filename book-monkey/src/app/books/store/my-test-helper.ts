import { Book } from '../../shared/book';

export function book(i: number): Book {
  return {
    isbn: 'isbn' + i,
    title: 'title' + i,
    authors: [],
    published: new Date()
  };
}