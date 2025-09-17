Project Structure 

/Safeguard-assignment
├── /features
│   ├── recruitment.feature       # Gherkin scenarios for recruitment module
│   └── step-defination
│       └── recruitmen.steps.js   #  step implementations
├── /src
│   ├── pages
|   |   |──base.page.js          # Page Object Model for basic action across module
│   │   └── recruitment.page.js  # Page Object Model for recruitment page
│   └── utils
│       └── test-data.js         # Sample data for tests
├── /reports                     # Test execution reports
├── cucumber.js                  # Cucumber configuration
├── package.json                 # Project dependencies and scripts
├── playwright.config.js          # Playwright configuration
└── README.md                    # Project documentation


Installation

Clone the repository:
git clone https://github.com/SufiaEram/Safeguard-assignment.git
cd Safeguard-assignment

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

Configuration

playwright.config.js: Configures browser settings, timeouts, and base URL.
cucumber.js: Defines Cucumber-specific settings, including step definition paths and support files.

Running Tests

To execute the tests:
npx cucumber-js 

For parallel execution:
npx cucumber-js --parallel