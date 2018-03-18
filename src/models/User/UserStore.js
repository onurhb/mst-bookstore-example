import { types } from "mobx-state-tree"

// Other models
import Book from "../Book/Book";

const UserStore = types.model({
  myBooks: types.optional(types.array(Book), []),
  wishList: types.optional(types.array(types.reference(Book)), []),
  coins: 100,
}).actions(self => ({
  buyBook(book) {
    if(book.discountPrice < self.coins) {

      // self.myBooks.push(BoughtBook.create({ book, amount: 1 })); will not work
      // We can't have same node two places
      // To solve this problem, we need to copy the node
      self.myBooks.push(Book.create(book.toJSON()));
      self.coins -= book.discountPrice;
    } else {
      window.alert('Sorry, you need to mine more doges ;)')
    }
  },
  addBookToWishList(book) {
    if(!self.wishList.includes(book)) 
      self.wishList.push(book);
  }
}))

export default UserStore;
