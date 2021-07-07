module.exports = {
    elements:
    {
        postcodenew: '#postcode',
        distance: '#distance',
        make: '#make',
        min: '#minPrice',
        searchBTN: ".atds-button--primary",
        searchResults: ".save-search-button",
        BMWdetails:".search-form__count.js-results-count",
        PageCount: "//li[@class='paginationMini__count']"
        
    },
  
    commands:
     [{
        setPostcode( ) {
            return this
              .waitForElementVisible('@postcodenew')
              .pause(3000)
              .clearValue('@postcodenew') 
              .pause(3000)          
              .setValue('@postcodenew', 'RM8 1AE')
              .pause(5000)      
     
        },

        setDistance () {
                return this
                  .waitForElementVisible('@distance')
                  .click("@distance")
                  .pause(3000) 
                  .useXpath()
                  .click("//option[@value='10']")
                  .pause(1000)
                  .click("//option[@value='10']")
                  .pause(3000)  
                },

        setMakeAudi () {
                    return this
                    .useCss()
                    .waitForElementVisible('@make')
                    .click("@make")
                    .pause(3000)
                    .click("optgroup[label='All makes'] option[value='AUDI']")
                    .pause(1000)
                    .click("optgroup[label='All makes'] option[value='AUDI']")
                    .pause(3000)
                },

        setMin () {
                    return this
                    .waitForElementVisible('@min')
                    .click("@min")
                    .pause(1000)
                    .click("option[value='500']")
                    .pause(1000)
                    .click("option[value='500']")
                    .pause(3000)            
                },  

        ClickSearch(){
            return this
            .useXpath()
            .waitForElementVisible('@searchBTN')
            .click('@searchBTN')
                },  
                     

        resultsPage(){
            return this
            .useXpath()
            .waitForElementVisible('@searchResults')
            .assert.visible("//*[contains(@class, 'js-reset')]")
            .pause(3000) 

        },

        setMakeBMW () {
            return this
            .waitForElementVisible('@make')
            .click("@make")
            .pause(3000)
            .useCss()
            .click("#make > optgroup:nth-of-type(2) > option:nth-of-type(6)")
            .pause(1000)
            .click("#make > optgroup:nth-of-type(2) > option:nth-of-type(6)")
            .pause(5000)
            // .useXpath()
            // .getText('css selector', '@PageCount', function(result) {
            //     console.log('getText result', result.value);
            //   });
        },
                     
    }]
  
}
     
