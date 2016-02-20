var React = require('react');
var NewsItem = require('./newsItem.jsx');

module.exports = React.createClass({

getInitialState: function() {
  return {
     data : [{"title":"欢迎使用定制版每日资讯","href":"594wanghao"},{"title":"By Vortex","href":"594wanghao"}]
  };
},

componentDidMount: function() {
  $.post("/getData" , {url:this.props.url}, function(result) {
    var list = result;
    if (this.isMounted()) {
      this.setState({
        data:JSON.parse(result)
      });
   }
   }.bind(this));
},

render: function() {
  var url = this.props.url;
  var component_style = "portlet box " + this.props.component_style;
  var item_style = this.props.item_style;
    console.log(this.state.data);
    var datas = this.state.data;
  if(datas){
    var NewsItems = datas.map(function (Item) {
        return <NewsItem item_style={item_style} key={Item.id} title={Item.title} href={Item.href}/>
 });
 }

return (
    <div className={component_style}>
      <div className="portlet-title">
        <div className="caption">
          <i className="fa fa-cogs"></i>
          今日资讯 From {url}
        </div>
        <div className="tools">
          <a href="javascript:;" data-original-title="" title="" className="expand"></a>
        </div>
      </div>
      <div className="portlet-body">
          {NewsItems}
      </div>
    </div>
      );
}
});
