var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {

	getContacts : function(){
		return _contacts;
	},
	saveContact : function(contact){
		_contacts.push(contact);
	},
	setContacts : function(contacts){
		_contacts = contacts;
	},
	removeContact : function(contactId){
		var index = _contacts.findIndex(x => x.id === contactId);
		_contacts.splice(index, 1);
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	},
	setContactToEdit : function(contact){
		_contact_to_edit = contact;
	},
	getContactToEdit : function(){
		console.log("get here 1");
		return _contact_to_edit;
	},
	updateContact : function(contact){
		//store update
		for( i = 0; i < _contacts.length; i++){
			if(_contacts[i].id == contact.id){
				_contacts.splice(i, 1);
				_contacts.push(contact);
			}
		}
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case  AppConstants.SAVE_CONTACT :
			console.log('Saving Contact...');

			//store Save
			AppStore.saveContact(action.contact);
			//save to firebase API
			AppAPI.saveContact(action.contact);

			//Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;

		case  AppConstants.RECEIVE_CONTACTS :
			console.log('Receiving Contacts...');

			//store Save
			AppStore.setContacts(action.contacts);
			//Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
		
		case  AppConstants.REMOVE_CONTACT :
			console.log('Removing Contact...');

			//store Remove
			AppStore.removeContact(action.contactId);

			//API remove
			AppAPI.removeContact(action.contactId);

			//Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;

		case  AppConstants.EDIT_CONTACT :
		
			//store set to edit
			AppStore.setContactToEdit(action.contact);
			//Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;

		case  AppConstants.UPDATE_CONTACT :
			console.log('Updating Contact...');
			console.log(action.contact);
			//store update
			AppStore.updateContact(action.contact);

			//API update
			AppAPI.updateContact(action.contact);

			//Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
});

module.exports = AppStore;