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
  /*
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
  },*/
  
  handleClick: function()
  {
  var Newstate;
  if(this.state.value =='X') Newstate='O';
  else  Newstate='X';
  this.setState({value:Newstate});
  },
  
  
  
  'render': function onRender () {
    return (
      <button style={ButtonStyle} onClick = {this.handleClick}>{this.state.value}</button>
    );
  }
});
var Row = React.createClass({

  'render': function onRender () {
    return (
	<div>
	<Box initialValue=getInitialState/>
	<Box initialValue=getInitialState/>
	<Box initialValue=getInitialState/>
	</div>

    );
  }

});

React.render(<Row/>, document.body);