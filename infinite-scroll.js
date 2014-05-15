'use strict';

var topOfElement = function(element) {
  if (!element) {
    return 0;
  }
  return element.offsetTop + topOfElement(element.offsetParent);
};

module.exports = {
  getDefaultProps: function() {
    return {
      initialPage: 1,
      offset: 250
    };
  },

  componentWillMount: function() {
    this.nextPage = this.props.initialPage;
  },

  componentDidMount: function() {
    this.attachScrollListener();
  },

  componentDidUpdate: function() {
    this.attachScrollListener();
  },

  scrollListener: function () {
    var el = this.getDOMNode();
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (topOfElement(el) + el.offsetHeight - scrollTop - window.innerHeight < this.props.offset) {
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
