// src/utils/test-data.js
const testData = {
  validUser: {
    username: "Admin",
    password: "admin123"
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
  }
};

module.exports = { testData };
