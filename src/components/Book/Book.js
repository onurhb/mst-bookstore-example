import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Components
import { Card, Button, Image, Icon } from 'semantic-ui-react';

class Book extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  render() {
    const { id, name, author, discount, price, stars, onBuy } = this.props;
    return (
      <Card fluid color='violet'>
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {author}
          </Card.Meta>
          <Card.Description>
            Price: <strong>{price - price * discount} DOGE </strong> 
            <img style={{marginTop: '-3px'}} height="16px" src="https://cdn1.iconfinder.com/data/icons/cryptocurrency-outline-black/131/blockchain_cryptocurrency_currency_Dogecoin_2-256.png"/>
            {
              discount > 0 && <i>({discount} off)</i>
            }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button onClick={() => onBuy(id)} basic>
              Shop
            </Button>
            <Button basic>Add to wishlist</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Book;
