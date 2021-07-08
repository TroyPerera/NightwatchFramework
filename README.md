#nightwatchframework

Please follow the following steps to run tests

1. Install Nightwatch from NPM
$ npm install nightwatch --save-dev

2. Install Browser Drivers:

Geckodriver (Firefox) & Chromedriver:
$ npm install nightwatch geckodriver chromedriver --save-dev

3. To Run the tests:

Single tag :
npm run e2e-test -- --tags @smoke 
npm run e2e-test -- --tags @zaizisearch 

Multiple tags :
npm run e2e-test -- --tags "@zaizisearch or @smoke"

Skip tags :
npm run e2e-test -- --tags "not @zaizisearch"