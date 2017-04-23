var React = require('react');
var createReactClass = require('create-react-class');

var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

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
		if(this.state.movies == ''){
			var movieResults = '';
		} else {
			var movieResults = <MovieResults movies={this.state.movies}/>
		}
		return(
			<div>
				<SearchForm />
				{movieResults}
			</div>
		)
	},

	_onChange : function(){
		//refresh state
		this.setState(getAppState);
	}
})

module.exports = App;