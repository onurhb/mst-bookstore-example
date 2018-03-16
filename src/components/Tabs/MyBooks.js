import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import { Tab, Container } from 'semantic-ui-react'
import Book from '../Book/Book';


/**
 * By passing book object as a whole (book={book}) we must make Book component observer aswell (which we don't want)
 */

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
                            discountPrice={book.discountPrice}
                            {...book}
                        />)
                }
            </Tab.Pane>
        )
    }
}

const mapStore = stores => ({ user: stores.user });
export default inject(mapStore)(observer(MyBooks));
