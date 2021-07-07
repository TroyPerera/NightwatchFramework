const Services = {}; loadServices();
require('dotenv').config();
module.exports = {
  
  src_folders: ["pages"],
  page_objects_path: 'page-elements',

  // webdriver : {
  //   start_process: true,
  //   server_path: ('node_modules/.bin/chromedriver'),
  //   port : 9515
  // },

  test_settings: {
    default: {  
      screenshots: {
        enabled: true,
        path: 'screenshots',
        on_failure: true,
        on_error: true
      },
      

      desiredCapabilities: {
        browserName : 'firefox',
      },
      webdriver: {
        start_process: true,
        server_path: (Services.geckodriver ? Services.geckodriver.path : ''),
      },

      
      desiredCapabilities: {
        browserName: 'chrome',
      },

      webdriver: {
        start_process: true,
        server_path: ('node_modules/.bin/chromedriver'),
        
      },

      // safari: {
      //   desiredCapabilities : {
      //     browserName : 'safari',
      //     alwaysMatch: {
      //       acceptInsecureCerts: false
      //     }
      //   },
      //   webdriver: {
      //     port: 4445,
      //     start_process: true,
      //     server_path: '/usr/bin/safaridriver',
      //   }
      // },
    },

    

    // safari: {
    //   desiredCapabilities : {
    //     browserName : 'safari',
    //     alwaysMatch: {
    //       acceptInsecureCerts: false
    //     }
    //   },
    //   webdriver: {
    //     port: 4445,
    //     start_process: true,
    //     server_path: '/usr/bin/safaridriver',
    //   }
    // },

    // firefox: {
    //   desiredCapabilities : {
    //     browserName : 'firefox',
    //   },
    //   webdriver: {
    //     start_process: true,
    //     port: 8080,
    //     server_path: (Services.geckodriver ? Services.geckodriver.path : ''),
    //   }
    // },

    // chrome: {
    //   desiredCapabilities : {
    //     browserName : 'chrome',
    //     chromeOptions : {
    //       args: [ 
    //       ]
    //     }
    //   },

    //   webdriver: {
    //     start_process: true,
    //     server_path: ('node_modules/.bin/chromedriver')
    //   }
    // },
    
    
  }
};

function loadServices() {
  try {
    Services.seleniumServer = require('selenium-server');
  } catch (err) {}

  try {
    Services.chromedriver = require('chromedriver');
  } catch (err) {}

  try {
    Services.geckodriver = require('geckodriver');
  } catch (err) {}
}
