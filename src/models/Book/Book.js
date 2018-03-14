import { types } from 'mobx-state-tree';

const Book = types.model({
  id: types.identifier(),
  name: types.string,
  author: types.string,
  price: types.number,
  discount: types.number,
  stars: types.optional(types.number, 0),
})
.views(self => ({
  
}))
.actions(self => ({
  
}));

export default Book;
