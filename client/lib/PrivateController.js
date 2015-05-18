PrivateController = ApplicationController.extend({
	onBeforeAction: function () {
		console.log("PrivateController");
		
		// AccountsEntry.signInRequired(this);
		if(!Meteor.loggingIn() && !Meteor.user())
		{
			Session.set('fromWhere', this.url);
			Router.go('/sign-in');
			Session.set('entryError', t9n('error.signInRequired'));
		}
			
		this.next();
	}
});