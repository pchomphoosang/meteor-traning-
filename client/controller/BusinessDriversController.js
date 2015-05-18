Router.route('/business/drivers', {
	name: 'business_drivers'
});

BusinessDriversController = PrivateController.extend({
	onBeforeAction: function(){
		console.log("BusinessDriversController");


		this.next();
	},
	waitOn: function(){
		return [
			Meteor.subscribe('business_driver_invites')
		];
	},
	data: function(){ 
		return {
			// orders: Orders.find()
		};
	}
});

Template.afFieldInput.events({

});

Template.business_drivers.helpers({

});

// AutoForm.addHooks('insertOrderForm', {
//   formToDoc: function (doc, ss, formId) {
// 	var cost = doc.cost || 0;
// console.log("insertOrderForm formToDoc");
// 	doc.fee = Meteor.user().delivery_fee;
// 	doc.total = doc.fee + cost;

//     return doc;
//   },
//   docToForm: function (doc, ss) {
//     console.log('insertOrderForm docToForm', {doc: doc, ss: ss});

//     return doc;
//   },
// })
