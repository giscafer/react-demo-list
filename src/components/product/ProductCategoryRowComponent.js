'use strict';

import React from 'react';

class ProductCategoryRowComponent extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}

ProductCategoryRowComponent.displayName = 'ProductProductCategoryRowComponent';

// Uncomment properties you need
// ProductCategoryRowComponent.propTypes = {};
// ProductCategoryRowComponent.defaultProps = {};

export default ProductCategoryRowComponent;
