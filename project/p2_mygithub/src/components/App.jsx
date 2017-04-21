import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Search from './github/Search.jsx';
import Profile from './github/Profile.jsx';



class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username : 'Xu-Guo',
			userData : [],
			userRepos : [],
			perPage : 10
		}

	}


	//Get user data from github
	getUserData(){
		$.ajax({
			url : 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSerect,
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

	//Get user repos from github
	getUserRepos(){
		$.ajax({
			url : 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSerect+'&sort=created',
			dataType : 'json',
			cache : false,
			success : function(data){
				this.setState({userRepos : data});
				console.log(data);
			}.bind(this),
			error : function(xhr, status, err){
				this.setState({username : null});
				alert(err);
			}.bind(this)
		});
	}

	handleFormSubmit(username){
		this.setState({username : username}, function(){
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}

	render(){
		return(
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
				<Profile {...this.state} />
			</div>
		)
	}
}

App.propTypes = {
	clientId : PropTypes.string,
	clientSerect : PropTypes.string
};

App.defaultProps = {
	clientId : '6f4d328a799fb877b61f',
	clientSerect : '9651f6ea6848d2f2828aaec5031be391437ef54d'
}



export default App