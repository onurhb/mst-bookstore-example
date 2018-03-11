import React, { Component } from 'react';


// Components
import { Tab } from 'semantic-ui-react'
import AllBooks from './Tabs/AllBooks';

// Styles
import './App.css';

class App extends Component {
  
  render() {
    const panes = [
      { menuItem: { icon: 'favorite', content: 'Favorites' }, render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
      { menuItem: 'All books', render: () => <AllBooks/> },
      { menuItem: 'Unread', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
      { menuItem: 'Read', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    ]

    return (
      <div className="app">
        <div className="banner" />
        <div className="content">
          <Tab menu={{ pointing: true}} panes={panes} />
        </div>
      </div>
    );
  }
}

export default App;
