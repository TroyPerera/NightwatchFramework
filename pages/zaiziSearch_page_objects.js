const { client } = require("nightwatch-api");
const page = require("../page-elements/zaiziSearch_elements");


const searchtermwork = function () {
    return client
    .pause(3000)
    .maximizeWindow()
    .setValue(page.elements.searchBar,'work')
    .setValue(page.elements.searchBar, client.Keys.ENTER)
    .pause(4000)  


    .useXpath()
    //PURPOSELY TO TEST FAIL, CHANGE HERE TO 'whatwedo'TO PASS THETEST
    .waitForElementVisible(page.elements.whatwedo123)
    .click(page.elements.whatwedo)

    .getText('xpath',page.elements.verifyelementWhatwedo, function(result) {
    console.log('getText result', result.value);
    client.assert.equal(result.value, 'Put Digital in Your DNA')
    })

    .getWindowPosition(function(value) {
        console.log(value);
      })

   
    .saveScreenshot('screenshots/zaiziPDD.png')
    
    
    .waitForElementVisible(page.elements.whoweare)
    .click(page.elements.whoweare)
    
    
};

const results = function(){
    return client
    
    .useXpath()
    .waitForElementVisible(page.elements.verifyelementWhoweare)
    .useXpath()
    .assert.visible(page.elements.verifyelementWhoweare)

    
    .saveScreenshot('screenshots/zaiziEPDS.png')
    

    .getText('xpath',page.elements.verifyelementWhoweare, function(result) {
        console.log('getText result', result.value);
        client.assert.equal(result.value, 'Experts in Providing Digital Solutions')
      });
    

      
}
        
  

  module.exports = {searchtermwork, results}
  
