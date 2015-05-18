Router.route('/business', {});

BusinessController = PrivateController.extend({
	onBeforeAction: function(){
		console.log("BusinessController");

		Session.set('business_form_cost', 0);

		this.next();
	},
	waitOn: function(){
		return [
			Meteor.subscribe('business_orders'),
			Meteor.subscribe('business_drivers')
		];
	},
	data: function(){ 
		return {
			// orders: Orders.find()
		};
	}
});

Template.afFieldInput.events({
	'change input.field_cost, keyup input.field_cost': function(e, context){
		// console.log(this, arguments, e.target.value);
		Session.set('business_form_cost', e.target.value);
	}
});

Template.business.helpers({
	deliveryFee: function(){
		return Meteor.user().delivery_fee
	},
	total: function(){
		var cost = Session.get('business_form_cost') || 0;

		cost = parseFloat(cost);
		// console.log(cost, Meteor.user().delivery_fee, cost + Meteor.user().delivery_fee);
		return cost + Meteor.user().delivery_fee;
	}
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
