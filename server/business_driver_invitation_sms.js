DriverInvites.find({sms_sent: false}).observe({
	added: function(invite){

		var business = Meteor.users.findOne(invite.owner);

		var msg = "Please open the following link to signup as driver at DeliveryCrowd for "+business.emails[0].address+": http://localhost:3000/driver/invite/"+invite._id;

		//send sms
		twilio.sendSms({
			to: invite.phone, // Any number Twilio can deliver to
			from: twillio_number, // A number you bought from Twilio and can use for outbound communication
			body: msg // body of the SMS message
		}, function(err, responseData) { //this function is executed when a response is received from Twilio
			
			console.log('sms sent!', arguments);

			if (!err) { // "err" is an error received during the request, if any
				// "responseData" is a JavaScript object containing data received from Twilio.
				// A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
				// http://www.twilio.com/docs/api/rest/sending-sms#example-1
				console.log(responseData.from); // outputs "+14506667788"
				console.log(responseData.body); // outputs "word to your mother."
			}
		});	

		console.log('driver invite - sent sms:', msg);

		DriverInvites.update(invite._id, {$set: {sms_sent: true}});
	}
})