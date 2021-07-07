const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
 
 const home = client.page.AT_filter_Elements()
 
  Given(/^I on AutoTrader$/, function() {
    return client.url('https://www.autotrader.co.uk/')
  });

  When(/^I enter postcode$/, function() {
    return home.setPostcode();
   
  });

  When(/^I select miles$/, function() {
    return home.setDistance()
  
  });


  When(/^I select make AUDI$/, function() {
    return home.setMakeAudi()
  });

  Then(/^I select min price$/, function() {
    return home.setMin()
  });

  When(/^I press search$/, function() {
    return home.ClickSearch()
  });

  Then(/^I see the results$/, function() {
   return home.resultsPage()
  });

  Then(/^I select make BMW$/, function() {
    return home.setMakeBMW() 
  });