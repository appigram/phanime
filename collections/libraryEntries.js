LibraryEntries = new Meteor.Collection("libraryEntries");

LibraryEntries.helpers({
	anime: function() {
		return Anime.findOne({_id: this.animeId});
	}
});


LibraryEntries.allow({

	insert: function(userId, doc) {
		// the user must be logged in, and the library entry must be created by the user
		return (userId && doc.userId === userId);
	},
	update: function(userId, doc, fields, modifier) {

		// can only change your own library entries
		return doc.userId === userId;

	},
	remove: function(userId, doc) {

		// can only remove entries that you own
		return doc.userId === userId;

	}


});