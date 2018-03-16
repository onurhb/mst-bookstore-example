import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

class Coins extends Component {
  render() {
    const { coins } = this.props;
    return (
      <div className="user-coins">
        Wallet: <strong>{coins}</strong>
        <img alt="" style={{ marginLeft: 5, marginBottom: -2, filter: "invert(1)" }} height="18px" src="https://cdn1.iconfinder.com/data/icons/cryptocurrency-outline-black/131/blockchain_cryptocurrency_currency_Dogecoin_2-256.png" />
      </div>
    )
  }
}

const mapStore = stores => ({ coins: stores.user.coins });
export default inject(mapStore)(observer(Coins));
