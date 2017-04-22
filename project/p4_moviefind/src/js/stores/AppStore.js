var AppDispatcher = require('../dispatcher/ApDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('./utils/appAPI.js');

var CHANGE_EVENT = 'change';

//for this project
var _movies = [];
var _selected = '';
//end

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange : function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener : function(callback){
		this.on('change', callback);
	},
	removeChangeLintener : function(callback){
		this.removeLintener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){

	}

	return true;

});

module.exports = AppStore;