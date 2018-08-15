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
    
    //the "HOOK" below will run before each test;
    //this will delete any collections before we run test.
    //we need to make sure that mocha understands to run beforeEach before //running our test.
    //caling done tells mocha it can run next text;

    beforeEach((done)=>{
      mongoose.connection.collections.userscollections.drop(()=>{
          done();
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
  # TESTING - using mocha - describe(), it() and assert()
  ```javascript
      /*
    decribe(arg1,arg2);
    it(arg1,arg2);
    arg1- string: describes test we about to write- string name is up to you
    arg2- function;
    "it" and "describe" are unique to mocha
    Mocha gives global access to both "it" and "describe";
    We need to assert a condition within the it();
    - go to your package.json file and enter "test":"mocha"
    */
    const assert = require('assert');
    describe('testing',()=>{
      it('check for sum below',()=>{
        assert(1+1===2);
      })
    });
    //to run this - enter on your terminal >>npm run test 
  const User = require('../src/user');
  describe('Creating records',()=>{
    it('saves a user',(done)=>{
    //creating an instance of the User model.
    const newUser = new User({
      name: "Kunle"
    });
    //to save it into our innternal database - use save();
        //save() returns a promise bc it's asynchronouse
    //we now want to assert that newUser is actually new;
    newUser.save()
    .then(()=>{
        assert(!newUser.isNew);
      //we call done to say it can run next text;
        done();
      });
    });
  })
    /*
    Any time you run 
    >> npm run test
    a new instance with internal unique id will be created.
    */
```
# Simple Mongo commands
  - show database
  >> show dbs
  - use database
  >> use (name-of-database)
  - show all the collections in this internal database;
  >> show collections
  - to see all documents in collections - similar to select * from tablename in sql;
  >> db.(enter collection name).find()
  - to make it look pretty;
  >> db.(enter collection name).find().pretty()
  - drop your database;
  >> db.dropDatabase()