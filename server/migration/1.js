Meteor.startup(function () {

	Migrations.add({
		version: 1,
		name: 'add sk dev user',
		up: function(){

           	Meteor.users.insert({
				"_id" : "pgz6Q4DEKgxRTxy36",
				"date_created" : new Date(),
				"emails" : [
					{
						"address" : "st3ve.knoch@gmail.com",
						"verified" : true
					}
				],
				"profile" : {
					
				},
				"delivery_fee": 1,
				"services" : {
					"email" : {
						"verificationTokens" : [ ]
					},
					"password" : {
						"bcrypt" : "$2a$10$TM6jwUBoCtOnj8ptMk1oiuIuQwTvL9OmspdTohJn2vHSjVsD6W4Na"
					},
					"resume" : {
						"loginTokens" : [ ]
					}
				},
				"roles": [
					'admin',
					'business'
				]
			});


		}
	});

});