TabularTables.BusinessDrivers = new Tabular.Table({
	name: "BusinessDrivers",
	collection: Meteor.users,
	columns: [
		{data: "phone", title: "Phone"},
		{data: "emails.0.address", title: "E-Mail"},
		{data: "profile.firstname", title: "Firstname"},
		{data: "profile.lastname", title: "Lastname"},
	],
	selector: function(userId){
	    return {
	    	business_user_id: userId
	    }
  	}
});