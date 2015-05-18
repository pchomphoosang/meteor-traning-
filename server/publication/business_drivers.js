Meteor.publish('business_drivers', function() {

	if(!this.userId || !Roles.userIsInRole(this.userId, 'business'))
	{
		// this.stop();
		return [];
	}

	return Meteor.users.find({
		business_user_id: this.userId, 
		roles: {"$in" : ['driver']}
	}, {fields: {'phone':1, 'profile':1, 'emails':1}});
});