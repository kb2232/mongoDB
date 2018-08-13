//bring in mongoose
const mongoose = require('mongoose');
// one of the properties in mongoose is a Schema;
const Schema = mongoose.Schema;
// in my internal database, i have a collection - within this collection, i will create a schema for it
// so that all instances for this specific collection follow this schema.

const UserSchema = new Schema({
  name:String
});

// i want to connect this collection to the schema and give it a name.
// the name "UserInstance" is what allows us to create instances of the model.
// the name of the collection is "userCollection"
const UserInstance = mongoose.model('userCollection',UserSchema);

//if this file was to be imported, we need to give access to the model in our collection;

module.exports = UserInstance;