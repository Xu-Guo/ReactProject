var React = require('react');
var createReactClass = require('create-react-class');

//components
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');
var EditForm = require('./EditForm.js');
var ContactList = require('./ContactList.js');

function getAppState(){
	return {
		contacts : AppStore.getContacts(),
		contactToEdit : AppStore.getContactToEdit()
	}
}

var App = createReactClass({
	
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		if(this.state.contactToEdit == ''){
			var form = <AddForm />
		} else {
			var form = <EditForm contactToEdit = {this.state.contactToEdit} />
		}
		return(
			<div>
				{form}
				<ContactList contacts={this.state.contacts} />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		console.log("get here");
		this.setState(getAppState());
	}
});

module.exports = App;