Meteor.publish('driver_invitation', function(invitation_id) {

	if(!invitation_id)
	{
		console.error('[sub driver_invitation] missing invitation_id!');

		return [];
	}

	var invite = DriverInvites.find(invitation_id, {active: true});
console.log('sub driver_invitation', invite.fetch());
	return invite;
});