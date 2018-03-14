import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import { Tab, Container } from 'semantic-ui-react'
import Book from '../Book/Book';

class WishList extends Component {
    onBuyBook(book) {
        const { user } = this.props;
        console.log("onBuyBook")
        user.buyBook(book);
    }

    render() {
        const { user } = this.props;

        return (
            <Tab.Pane as={Container}>
                {
                    user.wishList.map(book =>
                        <Book
                            key={book.id}
                            onBuy={this.onBuyBook.bind(this, book)}
                            book={book}
                        />)
                }
            </Tab.Pane>
        )
    }
}

const mapStore = stores => ({ user: stores.user });
export default inject(mapStore)(observer(WishList));
