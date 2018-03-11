import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import { Tab } from 'semantic-ui-react'

class AllBooks extends Component {

  componentDidMount() {
    this.props.books.loadBooks();
  }

  render() {
    const { books } = this.props;
    
    return (
      <Tab.Pane loading={books.isLoading}>
          { JSON.stringify(books) }
      </Tab.Pane>
    )
  }
}

export default inject('books')(observer(AllBooks));
