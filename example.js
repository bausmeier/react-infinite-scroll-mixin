/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var InfiniteScroll = require('./infinite-scroll');

var itemData = [
  {description: 'One'},
  {description: 'Two'},
  {description: 'Three'}
];

var listStyle = {
  fontSize: 32
};

var ItemList = React.createClass({
  // Include the mixin in your component
  mixins: [InfiniteScroll],

  getInitialState: function() {
    return {
      items: []
    };
  },

  render: function() {
    var items = this.state.items.map(function(item) {
      return (
        <li>{item.description}</li>
      );
    });

    return (
      <ul style={listStyle}>{items}</ul>
    );
  },

  // Define a fetchNextPage function
  fetchNextPage: function(nextPage) {
    console.log('Fetching page: ' + nextPage);
    // You could make an async call to fetch data here
    // Scrolling is disabled until the component is updated to prevent multiple calls to this function
    this.setState({
      items: this.state.items.concat(itemData)
    });
  }
});

React.renderComponent(<ItemList offset={100} initialPage={0} />, document.getElementById('container'));
