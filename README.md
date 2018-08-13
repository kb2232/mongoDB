# mongoDB

# CRUD - Create Read Update Delete
# installs:
  1. >> npm install mongoose mocha nodemon --save

# Project 1
  * the goal is to use the CRUD method
    - mocha library is for testing
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