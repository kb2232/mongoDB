//to test that we can create instances of our user model - we use mocha;
const assert = require('assert');
//giving access to the user model - User;
// according to the schema - User can only have name property and must be string;
const User = require('../src/user');
describe('Creating records',()=>{
  it('saves a uer',()=>{
    //creating an instance of the User model.
    const newUser = new User({
      name: "Kunle"
    });
    //to save it into our innternal database - use save();
    newUser.save();
  });
})
/*
Any time you run 
>> npm run test
a new instance with internal unique id will be created.
*/