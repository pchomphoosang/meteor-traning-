/**
Collection predefined by meteor like

Meteor.users = new Mongo.Collection("users");

http://docs.meteor.com/#/full/meteor_users
**/


// Accounts.onCreateUser(function(options, user){

// 	user.user_group_id = options.user_group_id;

// 	return user;
// });





var Schemas = {};

Schemas.UserProfile = new SimpleSchema({
	// picture: {
	//   type: String,
	//   optional: true,
	//   label: 'Profile picture',
	//   autoform: {
	//     afFieldInput: {
	//       type: 'fileUpload',
	//       collection: 'ProfilePictures'
	//     }
	//   }
	// },
	firstname: {
	  type: String,
	  optional: true
	},
	lastname: {
	  type: String,
	  optional: true
	},
	// location: {
	//   type: String,
	//   optional: true,
	//   autoform: {
	//     type: 'map',
	//     geolocation: true,
	//     searchBox: true,
	//     autolocate: true
	//   }
	// },
	// country: {
	//   type: String,
	//   label: 'Nationality',
	//   allowedValues: ["Select Country", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
	//   optional: true
	// }
});

Schemas.User = new SimpleSchema({
	// username: {
	// 	type: String,
	// 	regEx: /^[a-z0-9A-Z_]{3,15}$/,
	// 	optional: true
	// },
	emails: {
		type: [Object],
		optional: true
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	profile: {
		type: Schemas.UserProfile,
		optional: true
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	roles: {
		type: [String],
		blackbox: true,
		optional: true
	},



	delivery_fee: {
		type: Number,
		decimal: true,
		optional: true
	},
	phone: {
		type: String,
		optional: true
	},
	intivation_id: {
		type: String,
		optional: true
	},
	business_user_id: {
		type: String,
		optional: true,
		autoform: {
			options: function(){
				return _.map(Meteor.users.find().fetch(), function(user){
					return {
						label: user.emails[0].address,
						value: user._id
					}
				});
			}
		}
	}
});

Meteor.users.attachSchema(Schemas.User);
