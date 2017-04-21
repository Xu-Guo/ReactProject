import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username : 'xuguo',
			userData : [],
			userRepos : [],
			perPage : 5
		}

	}

	render(){
		return(
			<div>
				{this.state.username}
			</div>
		)
	}
}

App.propTypes = {
	clientId : PropTypes.string,
	clientSerect : PropTypes.string
};
App.defanltProps = {
	clientId : '6f4d328a799fb877b61f',
	clientSerect : '9651f6ea6848d2f2828aaec5031be391437ef54d'
}

export default App