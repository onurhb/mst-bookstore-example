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
                    user.myBooks.map(book =>
                        <Book
                            key={book.id}
                            onFavorite={this.onFavorite.bind(this,book)}
                            book={book}
                        />)
                }
            </Tab.Pane>
        )
    }
}

const mapStore = stores => ({ user: stores.user });
export default inject(mapStore)(observer(MyBooks));
