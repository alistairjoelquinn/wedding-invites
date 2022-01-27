db.createCollection('rsvps', {
   validator: {
      $jsonSchema: {
         bsonType: 'object',
         required: ['fullName', 'email', 'attending', 'partner', 'children', 'numberOfChildren'],
         properties: {
            fullName: {
               bsonType: 'string',
               description: 'Full name of guest, required.',
            },
            email: {
               bsonType: 'string',
               description: 'Email address of guest. Must be a string and is required.',
            },
            attending: {
               enum: ['yes', 'no', 'maybe'],
               description: 'Can only be one of the enum values and is required',
            },
            partner: {
               bsonType: 'bool',
               description: 'Boolean value, required',
            },
            partnerName: {
               bsonType: 'string',
               description: 'Partner name of guest. Must be a string, not required.',
            },
            children: {
               bsonType: 'bool',
               description: 'Boolean value, required',
            },
            numberOfChildren: {
               bsonType: 'Int',
               description: 'Integer, required',
            },
         },
      },
   },
});
