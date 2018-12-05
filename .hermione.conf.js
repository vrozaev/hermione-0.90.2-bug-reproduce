module.exports = {
    sets: {
        desktop: {
            files: 'tests'
        }
    },

    sessionsPerBrowser: 5,

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome', // this browser should be installed on your OS
                chromeOptions: {

                    args: ['headless']
            
                  }
            }
        }
    }
};