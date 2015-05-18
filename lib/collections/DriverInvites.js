DriverInvites = new Mongo.Collection("DriverInvites");

var schemas = new SimpleSchema({

    //business
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

    active: {
        type: Boolean,
        optional: true,
        autoValue: function(){
            if(this.isInsert)
            {
                return true;
            }
        }
    },

    sms_sent: {
        type: Boolean,
        optional: true,
        autoValue: function(){
            if(this.isInsert)
            {
                return false;
            }
        }
    },

    phone: {
        type: String
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

DriverInvites.attachSchema(schemas);

DriverInvites.allow({
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
        console.log('DriverInvites.update', arguments);
        // if(userId == doc.owner)
        // {
        //     return true;
        // }

        return true;
    }
});

DriverInvites.helpers({
    
});

