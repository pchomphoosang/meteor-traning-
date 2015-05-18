Meteor.startup(function () {

	Migrations.add({
		version: 2,
		name: 'add roles',
		up: function(){

           	Meteor.roles.insert({
				"name" : "consumer",
			});

           	Meteor.roles.insert({
				"name" : "business",
			});

           	Meteor.roles.insert({
				"name" : "driver",
			});


		}
	});

});