import React, { Component } from 'react';
import Stock from '../components/Stock'

// stockArray={this.state.stockArray}

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
      {this.props.stockArray.map(stock => 
      <Stock key={stock.id} stock={stock}/>)}
        
      </div>
    );
  }

}

export default StockContainer;
