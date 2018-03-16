import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import { Tab, Container } from 'semantic-ui-react'
import Book from '../Book/Book';

class AllBooks extends Component {

  // This is dangerous as it makes references invalid every time we mount this component
  // Do this once (I am doing it in index.js), or use deattach
  // componentDidMount() {
  //   this.props.books.loadBooks();
  // }

  onBuyBook(book) {
    const { user } = this.props;
    user.buyBook(book);
  }

  onAddToWishList(book) {
    const { user } = this.props;
    user.addBookToWishList(book);
  }

  render() {
    const { books } = this.props;

    return (
      <Tab.Pane as={Container} loading={books.isLoading}>
        {
          books.sortedAvailableBooks.map(book =>
            <Book
              key={book.id}
              onAddToWishList={this.onAddToWishList.bind(this, book)}
              onBuy={this.onBuyBook.bind(this, book)}
              discountPrice={book.discountPrice}
              myCustomBackdoor={book.myCustomBackdoor}
              {...book}
            />)
        }
      </Tab.Pane>
    )
  }
}

const mapStore = stores => ({ books: stores.books, user: stores.user });
export default inject(mapStore)(observer(AllBooks));
