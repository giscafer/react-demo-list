'use strict';

import React from 'react';
import ProductCategoryRow from './ProductCategoryRowComponent';
import ProductRow from './ProductRowComponent';

class ProductTableComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(Array.isArray(this.props.children)); // => true
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

ProductTableComponent.displayName = 'ProductProductTableComponent';

// Uncomment properties you need
// ProductTableComponent.propTypes = {};
// ProductTableComponent.defaultProps = {};

export default ProductTableComponent;
