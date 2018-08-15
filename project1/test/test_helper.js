//bring in mongoose
const mongoose = require('mongoose');

//to get rid of the warning about deprecating...we need ES6 implementation of promises;
mongoose.Promise=global.Promise;


//connect to mongo db from your laptop(localhost) - usertest is the name of one of our internal database.
// we do not need to create a database like in SQL. we just make one of the internal databases.
//we then add collections to it

mongoose.connect('mongodb://localhost/usertest');
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

});