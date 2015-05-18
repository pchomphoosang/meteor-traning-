ApplicationController = RouteController.extend({
	loadingTemplate: "loading",
	onBeforeAction: function () {
		console.log("ApplicationController");

		this.next();
	}
});