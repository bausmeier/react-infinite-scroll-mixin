'use strict';

var ReactDOM = require('react-dom');
var defaultInitialPage = 1;
var defaultOffset = 250;

var topOfElement = function(element) {
  if (!element) {
    return 0;
  }
  return element.offsetTop + topOfElement(element.offsetParent);
};

/**
 * @extends ReactCompositeComponentInterface
 *
 * @mixin InfiniteScrollMixin
 */
var InfiniteScrollMixin = {
  componentWillMount: function() {
    this.nextPage = this.props.initialPage || defaultInitialPage;
  },

  componentWillUnmount: function() {
    this.detachScrollListener();
  },

  componentDidMount: function() {
    this.attachScrollListener();
  },

  componentDidUpdate: function() {
    this.attachScrollListener();
  },

  scrollListener: function () {
    var el = ReactDOM.findDOMNode(this);
    var offset = this.props.offset || defaultOffset;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (topOfElement(el) + el.offsetHeight - scrollTop - window.innerHeight < offset) {
      this.detachScrollListener();
      this.fetchNextPage(this.nextPage++);
    }
  },

  attachScrollListener: function () {
    window.addEventListener('scroll', this.scrollListener);
    window.addEventListener('resize', this.scrollListener);
    this.scrollListener();
  },

  detachScrollListener: function () {
    window.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('resize', this.scrollListener);
  }
};

module.exports = InfiniteScrollMixin;
