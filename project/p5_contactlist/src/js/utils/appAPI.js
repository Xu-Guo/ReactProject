var AppActions = require('../actions/AppActions')
var firebase = require('firebase')

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBhWYd8-iitaC6oTkjduaAv0rcIomiKn70",
	authDomain: "contactlist-f2acd.firebaseapp.com",
	projectId : "contactlist-f2acd",
	databaseURL: "https://contactlist-f2acd.firebaseio.com/",
  	storageBucket: "contactlist-f2acd.appspot.com"
};
firebase.initializeApp(config);

module.exports = {
	saveContact : function(contact){
		console.log("saving!!");
		this.firebaseRef = firebase.database().ref().child("contacts");
		this.firebaseRef.push({
			contact : contact
		});
	}
}