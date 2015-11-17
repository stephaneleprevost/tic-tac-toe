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
    return {value: this.props.initialvalue};
  },
  
  'render': function onRender () {
    return (
      <button style={ButtonStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialvalue='X'/>, document.body);
