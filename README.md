#nightwatchframework

To Run the tests:

Single tag
npm run e2e-test -- --tags @smoke 
npm run e2e-test -- --tags @zaizisearch 


Multiple tags
npm run e2e-test -- --tags "@zaizisearch or @smoke"

Skip tags
npm run e2e-test -- --tags "not @zaizisearch"