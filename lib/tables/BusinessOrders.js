TabularTables.BusinessOrders = new Tabular.Table({
	name: "Orders",
	collection: Orders,
	columns: [
		{data: "consumer_phone", title: "Phone Number"},
		{data: "payment_status", title: "Payment"},
		{data: "status", title: "Status"},
		{
			data: "driver_user_id",
			title: "Driver",
			render: function (val, type, doc) {
				if(val)
				{
					var u = Meteor.users.find(val);

					console.log('driver user', val, u);

					if(u)
					{
						return Meteor.users.find(val).username;
					}
				}

				return "None";
			}
		},
		{data: "consumer_address", title: "Address"},
		{data: "_id", title: "Edit", tmpl: Meteor.isClient && Template.business_edit_button}
	],
	selector: function(userId){
	    return {
	    	owner: userId
	    }
  	}
});