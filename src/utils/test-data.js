// src/utils/test-data.js
const testData = {
  validUser: {
    username: "aifusmare@gmail.com",
    password: "Manchester@1311"
  },
  candidate:{
    fName: "sam",
    lName: "smith",
    candidateVacancy: "Software Engineer",
    email:"sam.smith@gmail.com"
  },
  Vacancies:{
    vName:"testVacancy",
    jtitle: "Software Engineer",
    hManager: "sam"
  },
  invalidUser: {
    username: "wrong",
    password: "wrong123"
  },
  MandatoryErrMsg: {
    errMsg : "Required",
    errMsg2 : "Expected format: admin@example.com"
  }
};

module.exports = { testData };
