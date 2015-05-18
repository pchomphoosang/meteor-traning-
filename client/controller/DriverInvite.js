Router.route('/driver/invite/:invitation_id', {
	name: 'driver_invite'
});

DriverInviteController = ApplicationController.extend({
	onBeforeAction: function(){
		console.log("DriverInviteController");

		Session.set('DriverInvitationId', this.params.invitation_id);

		if(Meteor.userId())
		{
		    Router.go('/driver');
		    return;
		}

		var invite = DriverInvites.findOne(this.params.invitation_id, {active: true});
		console.log('invite', invite);
		if(!invite || !invite.active)
		{
			Alert.error('Invite Key is invalid!');
		}

		this.next();
	},
	waitOn: function(){
		return [
			Meteor.subscribe('driver_invitation', this.params.invitation_id)
		];
	},
	data: function(){ 
		var invite = DriverInvites.findOne(this.params.invitation_id, {active: true});

		return {
			invitation_id: this.params.invitation_id,
			invite: invite
		};
	}
});

// Template.driver_invite.events({
// 	'submit form': function(event){
// 		event.preventDefault();

//         // var data = SimpleForm.processForm(event.target);



// 		var inputs = {};

// 		$('input', event.target).each(function(i, e){
// 			inputs[e.name] = e.value;
// 		});
// 		console.log('submit!!', inputs);



// 		// Accounts.createUser({
// 		// 	email: 
// 		// 	invitation_id: Template.instance().data.invitation_id 
// 		// })

// 	}
// });

Template.driver_invite.helpers({
	// SchemaDriverInvite: function(){
	// 	return 
	// }
});

AutoForm.hooks({
	driverSignUp: {
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			this.event.preventDefault();

			var self = this;

			console.log("!", arguments);
			
			if(insertDoc.password !== insertDoc.confirmPassword) 
			{
				this.done(new Error("Passwords do not match"));
				return false;
			}

			Accounts.createUser({
				is_driver: true,
				invitation_id: insertDoc.invitation_id,
				email: insertDoc.email,
				password: insertDoc.password,
				profile: {
					firstname: insertDoc.firstname,
					lastname: insertDoc.lastname,
				}
			}, function(error){
				console.log('createUser cb', arguments);
				if(error)
				{
					Alert.error(error.reason);
					window.scrollTo(0,0);
					self.done(error);
				}
				else
				{
					DriverInvites.update(insertDoc.invitation_id, {$set: {active: false}})
					self.done();
				}
		    })

			
			
			// Accounts.changePassword(insertDoc.old, insertDoc["new"], function(e) {
			//   $('.btn-primary').attr('disabled', null);
			//   if (e) {
			//     return Alert.error(e.message);
			//   } else {
			//     return Alert.success('Password Updated');
			//   }
			// });
			return false;
		}
	}
});


// AutoForm.hooks({
//   driverSignUp: {
//     onSubmit: function (insertDoc, updateDoc, currentDoc) {
// 		console.log("!", arguments, Session.get('DriverInvitationId'));

// 		// Accounts.createUser({
// 		// 	email: insertDoc.email,
// 		// 	password: insertDoc.password,
// 		// 	username: insertDoc.username,
// 		// 	invitation_id: Template.instance().data.invitation_id 
// 		// })

//       // if (customHandler(insertDoc)) {
//       //   this.done();
//       // } else {
//       //   this.done(new Error("Submission failed"));
//       // }
//       return false;
//     }
//   }
// });