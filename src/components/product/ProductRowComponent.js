'use strict';

import React from 'react';

class ProductRowComponent extends React.Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

ProductRowComponent.displayName = 'ProductProductRowComponent';

// Uncomment properties you need
// ProductRowComponent.propTypes = {};
// ProductRowComponent.defaultProps = {};

export default ProductRowComponent;
