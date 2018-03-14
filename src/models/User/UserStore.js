import { types } from "mobx-state-tree"

// Other models
import Book from "../Book/Book";

const UserStore = types.model({
  boughtBooks: types.array(types.reference(Book)),
  wishList: types.array(types.reference(Book))
}).views(self => ({
  get bughtBooks() {
    return self.boughtBooks.map(book => book.toJSON())
  },
  get filteredWishList() {
    return self.wishList.filter(book => !self.boughtBooks.includes(book))
  }
})).actions(self => ({
  buyBook(book) {
    self.boughtBooks.push(book);
  },
  addBookToWishList(book) {
    self.wishList.push(book);
  }
}))

export default UserStore;
