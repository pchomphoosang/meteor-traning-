Meteor.publish(null, function() {
	return Meteor.users.find({_id: this.userId}, {fields: {
		delivery_fee: 1, 
		business_user_id: 1
	}});
});