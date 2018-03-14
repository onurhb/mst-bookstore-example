import React, { Component } from 'react';


// Components
import { Tab } from 'semantic-ui-react'
import AllBooks from '../containers/Tabs/AllBooks';

// Styles
import './App.css';

class App extends Component {
  
  render() {
    const panes = [
      { key: 0, menuItem: 'Books', render: () => <AllBooks/> },
      { key: 1, menuItem: 'My Books', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
      { key: 2, menuItem: { icon: 'star', content: 'Wishlist' }, render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    ]

    return (
      <div className="app">
        <div className="banner" />
        <div className="content">
          <div className="title">
            <h1>MST Bookstore</h1>
          </div>
          <Tab menu={{ attached: false}} panes={panes} />
        </div>
      </div>
    );
  }
}

export default App;
