var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	saveContact : function(contact){
		//console.log(contact);
		AppDispatcher.handleViewAction({
			actionType : AppConstants.SAVE_CONTACT,
			contact : contact
		});
	},

	receiveContacts : function(contacts){
		//console.log(contact);
		AppDispatcher.handleViewAction({
			actionType : AppConstants.RECEIVE_CONTACTS,
			contacts : contacts
		});
	},

}

module.exports = AppActions;