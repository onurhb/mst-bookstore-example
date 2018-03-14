import { types } from 'mobx-state-tree';

const Book = types.model({
  id: types.identifier(),
  name: types.string,
  author: types.string,
  price: types.number,
  discount: types.number,
  favorite: false
})
.views(self => ({
  get discountPrice() {
    return self.price - self.discount;
  },
  get getSelf() {
    return self;
  }
}));

export default Book;
