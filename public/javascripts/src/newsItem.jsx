var React = require('react');

module.exports = React.createClass({
render: function() {
  var item_style = "panel panel-"+this.props.item_style;
return (
  <div className={item_style}>
    <div className="panel-heading">
      <h3 className="panel-title"><a href={this.props.href}>{this.props.title}</a></h3>
    </div>
  </div>
)
}
});
