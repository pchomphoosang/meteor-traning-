
// Meteor.subscribe("currency");
// Meteor.subscribe("market");


Template.navigation.helpers({
	// markets: function () {
	// 	return Market.find();
	// }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM/DD/YYYY hh:mm:ss a');
});

Template.registerHelper('Config', function(){
	return Config;
});

Template.registerHelper('pathDashboard', function(){
	
	if(Roles.userIsInRole(Meteor.user(), 'consumer'))
	{
		return '/consumer';
	}

	else if(Roles.userIsInRole(Meteor.user(), 'business'))
	{
		return '/business';
	}

	else if(Roles.userIsInRole(Meteor.user(), 'driver'))
	{
		return '/driver';
	}

	return 'dashboard';
});