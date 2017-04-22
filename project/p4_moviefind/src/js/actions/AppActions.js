var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	searchMovies: function(movie){
		console.log('Searching for movie ' + movie.title);

		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_MOVIES,
			movie: movie
		});
	},

	receiveMovieResults : function(movies){
		AppDispatcher.handleViewAction({
			actionType : AppConstants.RECEIVE_MOVIE_RESULTS,
			movies : movies
		});
	}
}

module.exports = AppActions;