module.exports = {
  default: {
    require: [
      "features/step-definitions/**/*.js",
      "src/hooks/hooks.js"
    ],
    publishQuiet: true,
    format: ["progress", "json:reports/cucumber-report.json"],
    parallel: 1
  }
};
