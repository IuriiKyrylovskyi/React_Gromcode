import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component{
  state = {
    filterText: '',
    inStockOnly: false,
  }

  handleFilterTextChange = e => {
    this.setState({
      filterText: e.target.value,
    })
  }

  handleInStockChange = e => {
    this.setState({
      inStockOnly: e.target.checked,
    })
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable;