import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stockArray: [],
    userStockIDs: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(rsp => rsp.json())
    .then(data =>
      this.setState({
        stockArray: data
      }))
  }

  handleClickPurchase = (id) => {
    //check userstockid array to see if the stockID exists
    // if it exists, add it to the state of userstocksid, if it doesn't exist ignore it.
    if(!this.state.userStockIDs.includes(id)){
      this.setState({
        userStockIDs: [...this.state.userStockIDs, id]
      })
    }
  }

  
  render() {
    let portfolioData = this.state.userStockIDs.map(id => this.state.stockArray.find(stock => id == stock.id))
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stockArray={this.state.stockArray}
              handleClickPurchase={this.handleClickPurchase}/>

            </div>
            <div className="col-4">

              <PortfolioContainer 
              userStockIDs={this.state.userStockIDs} portfolioData={portfolioData}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
