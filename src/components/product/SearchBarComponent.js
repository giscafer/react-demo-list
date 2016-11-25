'use strict';

import React from 'react';

class SearchBarComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(){
    //  this.refs.filterTextInput.focus()
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

SearchBarComponent.displayName = 'ProductSearchBarComponent';

// Uncomment properties you need
// SearchBarComponent.propTypes = {};
// SearchBarComponent.defaultProps = {};

export default SearchBarComponent;
