Router.route('/dashboard', {
});

DashboardController = PrivateController.extend({
	onBeforeAction: function () {
		if(Roles.userIsInRole(Meteor.user(), 'consumer'))
		{
			Router.go('/consumer');
		}

		else if(Roles.userIsInRole(Meteor.user(), 'business'))
		{
			Router.go('/business');
		}

		else if(Roles.userIsInRole(Meteor.user(), 'driver'))
		{
			Router.go('/driver');
		}

		else
		{
			throw new Meteor.Error('invalid user', 'user has no role');
		}

	}
});