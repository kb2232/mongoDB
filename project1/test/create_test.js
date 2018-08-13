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