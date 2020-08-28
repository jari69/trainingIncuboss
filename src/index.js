import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// var React = require('react');
// var ReactDOM = require('react-dom');
// var createReactClass = require('create-react-class');

//React.createElement(type, props, children);
// var h1 = React.createElement('h1', { className: 'header', key:'header' }, 'This is React');
// var p = React.createElement('p', { className: 'content', key:'content' }, "And that's how it works.");
// var reactFragment = [ h1, p ];
// var section = React.createElement('section', { className: 'container'}, reactFragment);

  // var ReactClass = createReactClass({
  //   getInitialState: function () {
  //     return {
  //       isHeaderHidden: false,

  //     };
  //   },
  //   handleClick: function () {
  //     this.setState({
  //     isHeaderHidden: !this.state.isHeaderHidden
  //     });
  //   },
  //   render: function () {
  //     const title= 'Stateful React Component';

  //     var headerElement = React.createElement('h1', { className:'header', key: 'header' }, title);
  //     var buttonElement = React.createElement('button', { className:'btn btn-default', onClick: this.handleClick, key: 'button' }, 'Toggleheader');
  //     if (this.state.isHeaderHidden) {
  //       return React.createElement('div', null, [ buttonElement ]);
  //     }
  //     return React.createElement('div', null, [ buttonElement,headerElement ]);
  //   }
  // });

  // var reactComponentElement = React.createElement(ReactClass);
  // ReactDOM.render(reactComponentElement, document.getElementById('root'));