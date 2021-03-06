import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { observer } from "mobx-react"

// Components
import { Card, Button, Label } from 'semantic-ui-react';

class Book extends Component {
  static propTypes = {
    book: PropTypes.shape({})
  }

  render() {
    const { name, author, discount, discountPrice, myCustomBackdoor, onBuy, onAddToWishList } = this.props;

    return (
      <Card className="animated-card" fluid color='violet'>
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Meta>
            {author}
          </Card.Meta>
          <Card.Description>
            Price: <strong>{discountPrice} DOGE </strong>
            <img alt="" style={{ marginTop: -3, marginRight: 5 }} height="16px" src="https://cdn1.iconfinder.com/data/icons/cryptocurrency-outline-black/131/blockchain_cryptocurrency_currency_Dogecoin_2-256.png" />

            {
              discount > 0 &&
              <Label onClick={() => myCustomBackdoor && myCustomBackdoor()} pointing="left" size='small' basic>
                -{discount} off
              </Label>
            }

          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            {
              onBuy &&
              <Button onClick={() => onBuy()} basic>Shop</Button>
            }
            {
              onAddToWishList &&
              <Button onClick={() => onAddToWishList()} basic>Add to wishlist</Button>
            }
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Book;
