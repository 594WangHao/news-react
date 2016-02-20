var React = require('react');
var NewsComponent = require('./newComponent.jsx');

React.render(
  <NewsComponent component_style="green" item_style="info" url="toutiao.io"/>,
  document.getElementById('example1')
);


