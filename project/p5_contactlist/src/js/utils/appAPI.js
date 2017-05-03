var firebase = require('firebase')
var AppActions = require('../actions/AppActions')


// Initialize Firebase
var config = {
	apiKey: "AIzaSyBhWYd8-iitaC6oTkjduaAv0rcIomiKn70",
	authDomain: "contactlist-f2acd.firebaseapp.com",
	projectId : "contactlist-f2acd",
	databaseURL: "https://contactlist-f2acd.firebaseio.com/",
  	storageBucket: "contactlist-f2acd.appspot.com"
};
console.log("here");
firebase.initializeApp(config);

module.exports = {
	saveContact : function(contact){
		console.log("saving!!");
		this.firebaseRef = firebase.database().ref().child("contacts");
		this.firebaseRef.push({
			contact : contact
		});
	},

	getContacts : function(){
		this.firebaseRef = firebase.database().ref().child("contacts");
		this.firebaseRef.once("value" , function(snapshot){
			var contacts = [];
			snapshot.forEach(function(childSnapshot){
				var contact = {
					id : childSnapshot.key,
					name : childSnapshot.val().contact.name,
					phone : childSnapshot.val().contact.phone,
					email : childSnapshot.val().contact.email
				}
				contacts.push(contact);
				
			});
			console.log(contacts);
			AppActions.receiveContacts(contacts);
			
		});
	},

	removeContact : function(contactId){
		this.firebaseRef = firebase.database().ref().child("contacts/"+contactId);
		this.firebaseRef.remove();
	},

	updateContact : function(contact){
		var id = contact.id;
		var updatedContact = {
			name : contact.name,
			phone : contact.phone,
			email : contact.email
		}

		this.firebaseRef = firebase.database().ref().child("contacts/"+contact.id+'/contact');
		this.firebaseRef.update(updatedContact);
	}
}