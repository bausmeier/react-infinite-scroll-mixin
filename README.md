### Infinite scroll mixin for React

Add the mixin to the array of mixins for your component and specify a fetchNextPage function to be called when the end of the page is reached.
The fetchNextPage function should accept the number of the next page to fetch as an argument.

Take a look at `examples/example.js` to see a [quick demo](https://bausmeier.github.io/react-infinite-scroll-mixin).

#### Usage

Install:

`npm install react-infinite-scroll-mixin`

Note:

Version 0.3.0 is made to work with React 0.14+ and you will need to install `react` and `react-dom` alongside this package.

Use:

`var InfiniteScrollMixin = require('react-infinite-scroll-mixin');`

#### Properties

The mixin makes use of the `initialPage` and `offset` properties of your component.

The initalPage property specifies the first page number passed to your fetchNextPage function (default 1). This can be used to start paging from 0 instead of one.

The offset property specifies how far from the bottom of the page the fetchNextPage function should be triggered (default 250).

#### Acknowledgement

I based this off of https://github.com/guillaumervls/react-infinite-scroll which is an infinite scroll addon for React.
