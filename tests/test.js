const assert = require('chai').assert;

describe('ya.ru', function() {
    let browser;

    beforeEach(function() {
        browser = this.browser;
    });

    new Array(100).fill(0).forEach((el, index) => {
        it(`test number ${index}`, function() {
            return browser
                .url('https://ya.ru')
                .setValue('.input__box .input__input', `test ${index}`)
                .getValue('.input__box .input__input')
                .then(function(title) {
                    assert.equal(title, `test ${index}`)
                });
        });
    });    
});