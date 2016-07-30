// var ExecutionEnvironment = require('ExecutionEnvironment');
// if (ExecutionEnvironment.canUseDOM &&
//   window.top === window.self &&
//         navigator.userAgent.indexOf('Chrome') > -1) {
//   navigator.userAgent.indexOf('Chrome') > -1 && typeof __react_devtools__ === "undefined"
//   {
import React from 'react';
import ReactDOM from 'react-dom';
const RenderEvents = React.createClass({
  render: function () {
    return (<p>haha</p>)
  }
});
ReactDOM.render(<RenderEvents />, document.getElementById('test'));
