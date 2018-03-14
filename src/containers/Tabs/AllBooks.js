import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import { Tab, Card, Container } from 'semantic-ui-react'
import Book from '../../components/Book/Book';

class AllBooks extends Component {

  componentDidMount() {
    this.props.books.loadBooks();
  }

  onBuyBook(id) {
    const { books, user } = this.props;
    user.buyBook(books.getBookById(id));
    console.log(user.bughtBooks)
  }

  render() {
    const { books } = this.props;

    const bookEls = [];

    return (
      <Tab.Pane as={Container} loading={books.isLoading}>
            {books.sortedAvailableBooks.map(book => <Book onBuy={id => this.onBuyBook(id)} {...book} />)}
      </Tab.Pane>
    )
  }
}

const mapStore = stores => ({books: stores.books, user: stores.user});
export default inject(mapStore)(observer(AllBooks));
