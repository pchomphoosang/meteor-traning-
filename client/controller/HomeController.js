Router.route('/', {
	layoutTemplate: 'layout_home',
	template: 'home',
	name: 'home'
});

HomeController = ApplicationController.extend({
	onBeforeAction: function () {
		console.log("HomeController");

		this.next();
	}
});