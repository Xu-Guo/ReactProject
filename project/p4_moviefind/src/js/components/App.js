var React = require('react');
var createReactClass = require('create-react-class');

var AppActions = require('../actions/AppActions.js');
var AppStroe = require('../stores/AppStore');

var App = createReactClass({
	render : function(){
		return(
			<div>
				My App
			</div>
		)
	}
})

module.exports = App;