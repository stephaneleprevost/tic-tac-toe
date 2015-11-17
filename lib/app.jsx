'use strict';

var React = require('react');

var ButtonStyle = {
'width':'100px',
'height' :'100px'
};
var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   
   getInitialState: function() {
    return {value: this.props.initialValue};
  },
  
  componentWillMount: function ()
   {
   setInterval(this.updatetime,300);
   },
   updatetime: function()
  {
   if(this.state.value == 'X')
   {
	return this.setState({value:'O'});
   }
   else
   {
   return this.setState({value:'X'});
   }
  },
  
  'render': function onRender () {
    return (
      <button style={ButtonStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue='X'/>, document.body);
