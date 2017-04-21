import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import PropTypes from 'prop-types';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username : 'Xu-Guo',
			userData : [],
			userRepos : [],
			perPage : 5
		}

	}

	//Get user data from github
	getUserData(){
		$.ajax({
			url : 'https://api.github.com/users/Xu-Guo?client_id=6f4d328a799fb877b61f&client_secret=9651f6ea6848d2f2828aaec5031be391437ef54d',
			dataType : 'json',
			cache : false,
			success : function(data){
				this.setState({userData : data});
				console.log(data);
			}.bind(this),
			error : function(xhr, status, err){
				this.setState({username : null});
				alert(err);
			}.bind(this)
		});
	}

	componentDidMount(){
		this.getUserData();
	}

	render(){
		return(
			<div>
				<Profile userData = {this.state.userData}/>
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