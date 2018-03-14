import { types } from 'mobx-state-tree';

// Other models
import Book from './Book';

console.log(Book.props)

const BoughtBook = types.model({
  book:  Book,
  amount: types.number
});

export default BoughtBook;
