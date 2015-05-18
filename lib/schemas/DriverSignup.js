Schemas.DriverSignup = new SimpleSchema({
	invitation_id: {
		type: String
	},  
	firstname: {
		type: String,
		regEx: /^[a-z0-9A-Z_]{3,15}$/
	},
	lastname: {
		type: String,
		regEx: /^[a-z0-9A-Z_]{3,15}$/
	},
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},  
	password: {
		type: String,
		label: "Enter a password",
		min: 8
	},
	confirmPassword: {
		type: String,
		label: "Enter the password again",
		min: 8,
		custom: function () {
			if (this.value !== this.field('password').value) {
				return "passwordMismatch";
			}
		}
	}
});