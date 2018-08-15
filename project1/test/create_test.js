//to test that we can create instances of our user model - we use mocha;
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
describe('Creating records',()=>{
  it('saves a uer',()=>{
    assert(1+1===2);
  })
})