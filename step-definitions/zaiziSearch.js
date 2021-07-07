const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');


const page = require ("../pages/zaiziSearch_page_objects")



         Given('I am on the zaizi page', function () {
           return client.url('https://zaizi.com/');
         });


         When('I search for the term work', function () {          
           return page.searchtermwork()
         });

         Then('I see the search results', function(){
            return page.results();

        });