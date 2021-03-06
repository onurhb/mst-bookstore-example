
import { types, getRoot, flow, detach } from "mobx-state-tree"

import Book from './Book';

const BookStore = types
    .model({
        isLoading: false,
        books: types.optional(types.map(Book), {})
    })
    .views(self => ({
        get store() {
            return getRoot(self)
        },
        get sortedAvailableBooks() {
            return sortBooks(self.books.values())
        }
    }))
    .actions(self => {
        function markLoading(loading) {
            self.isLoading = loading
        }

        function updateBooks(json) {
            json.forEach(bookJson => {
                // const existingBook = self.books.values().find(book => book.id === bookJson.id);
                // if (existingBook) {
                //     detach(existingBook);
                // }

                self.books.put(bookJson)
                self.books.get(bookJson.id).isAvailable = true
            })
        }

        const loadBooks = flow(function* loadBooks() {
            try {
                markLoading(true)
                const json = yield self.store.fetch("/books.json")
                updateBooks(json)
                markLoading(false)
            } catch (err) {
                console.error("Failed to load books ", err)
            }
        })

        return {
            updateBooks,
            loadBooks,
            markLoading
        }
    })

const sortBooks = (books) => {
    return books
        .filter(b => b.isAvailable)
        .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
}

export default BookStore;
