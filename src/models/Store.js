import { types, getEnv } from "mobx-state-tree"

// Submodels
import BookStore from './Book/BookStore';

const Store = types.model({
  books: types.optional(BookStore, {
    books: {}
  })
}).views(self => ({
  get fetch() {
    return getEnv(self).fetch
  }
}))

export default Store;
