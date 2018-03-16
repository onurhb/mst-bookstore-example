import { types } from 'mobx-state-tree';

const Book = types.model({
  id: types.identifier(),
  name: types.string,
  author: types.string,
  price: types.number,
  discount: types.number
})
.views(self => ({
  get discountPrice() {
    const price = self.price - self.discount;
    return price > 0 ? price : 0;
  }
}))
.actions( self => ({
  myCustomBackdoor() {
    self.discount = Math.floor(Math.random() * 50) + 1;
  }
}));

export default Book;
