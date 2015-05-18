AutoForm.addHooks(null, {
  before: {
    insert: function (doc) {
      console.log('before insert', {doc: doc});

      return doc;
    }
  },
  after: {
    insert: function (error, result) {
      console.log('after insert', {error: error, result: result});
    }
  },
  formToDoc: function (doc, ss, formId) {
    console.log('formToDoc', {doc: doc, ss: ss, formId: formId});

    return doc;
  },
  docToForm: function (doc, ss) {
    console.log('docToForm', {doc: doc, ss: ss});

    return doc;
  },
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log('onSubmit', {insertDoc: insertDoc, updateDoc: updateDoc, currentDoc: currentDoc});

    this.done();
  },
  onSuccess: function (formType, result) {
    console.log('onSuccess', {formType: formType, result: result});

    Alert.success('Form Sent!');
  },
  onError: function (formType, result) {
    console.log('onError', {formType: formType, result: result});

    Alert.error('Form Error: '+result.message);
  },
})

// AutoForm.hooks({
//   insertOrderForm: {
//     onSubmit: function (insertDoc, updateDoc, currentDoc) {
//       console.log('submit2', this, arguments);
//       // if (customHandler(insertDoc)) {
//       //   this.done();
//       // } else {
//       //   this.done(new Error("Submission failed"));
//       // }
//       // return false;
//     }
//   }
// });

// AutoForm._globalHooks({
//   onSubmit: function (insertDoc, updateDoc, currentDoc) {
//     console.log('submit3', this, arguments);
//   }
// })