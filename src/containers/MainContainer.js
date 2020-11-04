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

  handleClick = () => {
    // if stock matches with the stockid that was clicked
    // we get that stock and add it to the portfoliocontainer

  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stockArray={this.state.stockArray}
              handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer 
              userStockIDs={this.state.userStockIDs} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
