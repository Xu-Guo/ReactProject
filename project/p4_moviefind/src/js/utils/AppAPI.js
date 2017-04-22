var AppActions = require('../actions/AppActions.js');

module.exports = {
	
	searchMovies : function(movie){
		console.log('sending ajax request...');
		$.ajax({
			url: 'http://www.omdbapi.com/?s='+movie.title,
			dataType : 'json',
			cache : false,
			success : function(data){
				AppActions.receiveMovieResults(data.Search);
			}.bind(this),
			error : function(xhr, status, err){
				alert(error);
			}.bind(this)
		});
	}
}