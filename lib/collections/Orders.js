Orders = new Mongo.Collection("Orders");

var schemas = new SimpleSchema({

    owner:  {
        type: String,
        denyUpdate: true,
        index: true,
        regEx: SimpleSchema.RegEx.Id,
        autoValue: function(){
            if(this.isInsert)
            {
                return Meteor.userId();
            }
        },
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
    },

    driver_user_id: {
        type: String,
        optional: true
    },

    consumer_user_id: {
        type: String,
        optional: true
    },

    consumer_phone: {
        type: String,
        optional: true
    },

    consumer_email: {
        type: String,
        optional: true
    },

    consumer_address: {
        type: String,
        optional: true
    },

    payment_status: {
        type: String,
        defaultValue: 'OPEN',
        allowedValues: ['OPEN'],
    },

    status: {
        type: String,
        defaultValue: 'OPEN',
        allowedValues: ['OPEN'],
    },

    cost: {
        type: Number,
        decimal: true,
    },

    fee: {
        type: Number,
        decimal: true,
    },

    total: {
        type: Number,
        decimal: true,
    },

    is_smartphone: {
        type: Boolean,
        optional: true,
        defaultValue: true,
        autoform: {
            defaultValue: true
        }
    },

    is_pickup: {
        type: Boolean,
        optional: true
    },

    payment_type: {
        type: String, 
        allowedValues: ['ONLINE','CASH','PHONE'],
        defaultValue: 'ONLINE',
        autoform: {
            options: 'allowed',
            capitalize: true,
            defaultValue: 'ONLINE'
        }
    },

    notes: {
        type: String,
        optional: true
    },
    
    date_created: {
        type: Date,
        label: "Created Date",
        autoValue: function() {
            if (this.isInsert)
                return new Date;
        },
        denyUpdate: true,
        optional: true
    },
    date_updated: {
        type: Date,
        label: "Updated Date",
        autoValue: function() {
            return new Date();
        },
        optional: true
    }
});

Orders.attachSchema(schemas);

Orders.allow({
    insert: function(userId, doc){
        if(userId == doc.owner)
        {
            return true;
        }
        else if(userId && !doc.owner)
        {
            doc.owner = userId;

            return true;
        }

        return false;
    },
    update: function(userId, doc, fieldNames, modifier){
        if(userId == doc.owner)
        {
            return true;
        }

        return false;
    }
});

Orders.helpers({
    
});

