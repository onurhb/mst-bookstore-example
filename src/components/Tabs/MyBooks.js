import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import { Tab, Container } from 'semantic-ui-react'
import Book from '../Book/Book';

class MyBooks extends Component {
    onFavorite(book) {

    }

    render() {
        const { user } = this.props;

        return (
            <Tab.Pane as={Container}>
                {
                    user.myBooks.map(boughtBook =>
                        <Book
                            key={boughtBook.book.id}
                            onFavorite={this.onFavorite.bind(this, boughtBook.book)}
                            book={boughtBook.book}
                        />)
                }
            </Tab.Pane>
        )
    }
}

const mapStore = stores => ({ user: stores.user });
export default inject(mapStore)(observer(MyBooks));
