Config = {
	name: 'DeliveryCrowd',
	title: 'DeliveryCrowd enables businesses, delivery drivers and consumers have a seamless  delivery process with the help of technology',
	subtitle: 'We believe the delivery experience should be an excellent one. We work hard to provide businesses and their customers with:<br/><br/>Streamlined delivery - the way it should be!<br/>&<br/>Secure payment - including Bitcoin!',
	logo: function() {
		return '<b>' + this.name + '</b>';
	},
	footer: function() {
		return this.name + ' - Copyright ' + new Date().getFullYear();
	},
	emails: {
		from: 'noreply@' + Meteor.absoluteUrl()
	},
	homeRoute: '/',
	dashboardRoute: '/dashboard',
	publicRoutes: ['home'],
	debug: true
};

if(Config.debug)
{
	// AutoForm.debug();
}