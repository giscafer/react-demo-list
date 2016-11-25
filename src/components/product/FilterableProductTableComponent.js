'use strict';

import React from 'react';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

import ProductTable from './ProductTableComponent';
import SearchBar from './SearchBarComponent';

class FilterableProductTableComponent extends React.Component {
  constructor(props){
    super(props);
    //初始化参数
    this.props=props;
    this.state={
       filterText: '',
       inStockOnly: false
    }
    //绑定上下问
    this.handleUserInput = this.handleUserInput.bind(this);
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  /*static defaultProps = {
      filterText: '',
      inStockOnly: false
  }*/
  
  handleUserInput(value,checked){
    this.setState({
      filterText: value,
      inStockOnly: checked
    });
  }
  render() {
     return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

FilterableProductTableComponent.displayName = 'ProductFilterableProductTableComponent';

// Uncomment properties you need
// FilterableProductTableComponent.propTypes = {};
// FilterableProductTableComponent.defaultProps = {};

export default FilterableProductTableComponent;
