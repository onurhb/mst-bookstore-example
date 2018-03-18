import { types, getEnv } from "mobx-state-tree"

// Submodels
import BookStore from './Book/BookStore';
import UserStore from './User/UserStore';

const Store = types.model({
  books: types.optional(BookStore, {}),
  user: types.optional(UserStore, {})
}).views(self => ({
  get fetch() {
    return getEnv(self).fetch
  }
}))

export default Store;
