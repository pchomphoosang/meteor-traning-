// Accounts.ui.config({
//     // passwordSignupFields: 'USERNAME_AND_EMAIL'
// });


Meteor.startup(function () {

    AccountsEntry.config({
        // logo: 'logo.png', // if set displays logo above sign-in options
        privacyUrl: '/privacy-policy', // if set adds link to privacy policy and 'you agree to ...' on sign-up page
        termsUrl: '/terms-of-use', // if set adds link to terms  'you agree to ...' on sign-up page
        homeRoute: '/', // mandatory - path to redirect to after sign-out
        dashboardRoute: '/dashboard', // mandatory - path to redirect to after successful sign-in
        // profileRoute: 'profile',
        passwordSignupFields: 'USERNAME_AND_EMAIL',
        // showSignupCode: true,
        showOtherLoginServices: true, // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
        // extraSignUpFields: [{ // Add extra signup fields on the signup page
        //     field: "company", // The database property you want to store the data in
        //     name: "", // An initial value for the field, if you want one
        //     label: "Company [optional]", // The html lable for the field
        //     placeholder: "", // A placeholder for the field
        //     type: "text", // The type of field you want
        //     // required: true // Adds html 5 required property if true
        // }]
    });
});
