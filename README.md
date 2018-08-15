# mongoDB

# CRUD - Create Read Update Delete
# installs:
  1. >> npm install mongoose mocha nodemon --save

# Project 1
  * the goal is to use the CRUD method
    - mocha library is for testing - very popular testing framework
    - nodemon is for live server
    - mongoose is a library that gives you nice API to connect with mongo
  * IDEA
    - In our single Mongo database, we will create an internal database with only one collection - users.
    - Mongoose library will connect to the user collection.
    - mocha library will be used for testing to make sure we are actually inserting into our database.
# Project 1 structure
  * src/
    1. user.js
  * test/
    1. create_test.js
    2. read_test.js
    3. update_test.js
    4. delete_test.js

# Connection to database on your machine
```javascript
    //bring in mongoose
    const mongoose = require('mongoose');
    //connect to mongo db from your laptop(localhost) - user_test is the name of one of our internal database.
    // we do not need to create a database like in SQL. we just make one of the internal databases.
    //we then add collections to it.
    mongoose.connect('mongodb://localhost/user_test');
    //we connect to the internal database. Once it is done attempting to connect it return promise.
    //we catch the event handlers with .once(it went well), and .on(it didnt go well);
    //these are analagous to .then() and .catch();
    mongoose.connection
      .once('open',()=>{
        console.log("Good to go");
      })
      .on('error',(error)=>{
        console.warn('Warning',error);
      });
```


# Database structure
```javascript
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
```