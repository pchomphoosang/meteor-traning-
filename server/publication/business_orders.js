Meteor.publish('business_orders', function() {

	if(!this.userId || !Roles.userIsInRole(this.userId, 'business'))
	{
		// this.stop();
		return [];
	}

	return Orders.find({owner: this.userId});
});