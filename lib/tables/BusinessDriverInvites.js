TabularTables.BusinessDriverInvites = new Tabular.Table({
	name: "DriverInvites",
	collection: DriverInvites,
	columns: [
		{data: "phone", title: "phone"},
		{data: "sms_sent", title: "sms sent"},
		{data: "active", title: "active"},
	],
	selector: function(userId){
	    return {
	    	owner: userId,
	    	active: true
	    }
  	}
});