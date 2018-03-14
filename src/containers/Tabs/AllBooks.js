import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import { Tab, Container } from 'semantic-ui-react'
import Book from '../../components/Book/Book';

class AllBooks extends Component {

  componentDidMount() {
    this.props.books.loadBooks();
  }

  onBuyBook(book) {
    const { user } = this.props;
    console.log("onBuyBook")
    user.buyBook(book);
  }

  onAddToWishList(book) {
    const { user } = this.props;
    console.log("onAddToWishList")
    user.addBookToWishList(book);
  }

  render() {
    const { books } = this.props;

    return (
      <Tab.Pane as={Container} loading={books.isLoading}>
        {/* Don't use spread operator (does not include getters):  <Book {...book} /> */}
        {
          books.sortedAvailableBooks.map(book =>
            <Book
              key={book.id}
              onAddToWishList={this.onAddToWishList.bind(this, book)}
              onBuy={this.onBuyBook.bind(this, book)}
              book={book}
            />)
        }
      </Tab.Pane>
    )
  }
}

const mapStore = stores => ({ books: stores.books, user: stores.user });
export default inject(mapStore)(observer(AllBooks));
