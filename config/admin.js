AdminConfig = {
    nonAdminRedirectRoute: 'entrySignIn',
	name: 'Admin',
	dashboard: {
		// skin: 'black'
	},
	// adminEmails: ['']
	collections: {
		// Projects: {
		// 	icon: 'pencil',
  //           tableColumns: [
  //               {label: 'Title', name: 'title'},
  //               {label: 'User', name: 'owner'},
  //               {label: 'Description', name: 'description'},
  //               {label: 'Github', name: 'github'},
  //           ]
		// }
	},
    autoForm: {
        omitFields: ['date_created', 'date_updated']
    }
};