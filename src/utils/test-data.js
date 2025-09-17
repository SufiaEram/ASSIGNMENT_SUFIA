// src/utils/test-data.js
const testData = {
  validUser: {
    username: "Admin",
    password: "admin123"
  },
  candidate:{
    fName: "TestFirst",
    lName: "TestLast",
    email:"TestFirst.TestLast@gmail.com"
  },
  invalidUser: {
    username: "wrong",
    password: "wrong123"
  }
};

module.exports = { testData };
