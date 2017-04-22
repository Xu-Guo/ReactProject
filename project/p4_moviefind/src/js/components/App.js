var React = require('react');
var createReactClass = require('create-react-class');

var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');

function getAppState(){
	return {
		movies : AppStore.getMovieResults()
	}
}

var App = createReactClass({
	getInitialState: function(){
		return getAppState();
	},
	//add listener
	componentDidMount : function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnmount : function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render : function(){
		return(
			<div>
				<SearchForm />
			</div>
		)
	},

	_onChange : function(){
		//refresh state
		this.setState(getAppState);
	}
})

module.exports = App;