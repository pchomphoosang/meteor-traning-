Accounts.config({
	// sendVerificationEmail: true
});


Accounts.validateLoginAttempt(function(attempt){
	// console.log('login attempt', attempt);

	if (!attempt.allowed)
			return false;

	// if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
	// 	console.log('email not verified');

	// 	return false; // the login is aborted
	// }

	return true;
}); 

// Meteor.startup(function() {
	// By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
	Accounts.emailTemplates.from = 'deliverycrowd <no-reply@deliverycrowd.com>';

	// The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
	Accounts.emailTemplates.siteName = 'deliverycrowd';

	// A Function that takes a user object and returns a String for the subject line of the email.
	Accounts.emailTemplates.verifyEmail.subject = function(user) {
		return 'Confirm Your Email Address';
	};

	// A Function that takes a user object and a url, and returns the body text for the email.
	// Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
	Accounts.emailTemplates.verifyEmail.text = function(user, url) {
		return 'click on the following link to verify your email address: ' + url;
	};
// });

Accounts.onCreateUser(function(options, user){

	if(options.is_driver)
	{
		user.profile = {
			firstname: options.profile.firstname,
			lastname: options.profile.lastname
		};

		user.intivation_id = options.invitation_id
		user.roles = ['driver'];
		
		var invitation = DriverInvites.findOne(user.intivation_id, {active: true});

		if(invitation)
		{
			user.phone = invitation.phone;
			user.business_user_id = invitation.owner;
		}
	}
	else
	{
		user.roles = ['consumer'];
	}
	
	console.log('onCreateUser', options, user);
	
	return user;
});

Accounts.validateNewUser(function(user) {

	if(user.roles && user.roles.indexOf("driver"))
	{
		if(!user.intivation_id)
		{
			return new Meteor.Error(403, "Missing invitation key");
		}

		var invitation = DriverInvites.findOne(user.intivation_id, {active: true});

		if(!invitation)
		{
			return new Meteor.Error(403, "Invalid invitation key");
		}

	}
	
	console.log('validateNewUser', user);

	return true;
});
