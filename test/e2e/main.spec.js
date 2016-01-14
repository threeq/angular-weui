'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://192.168.35.188:3000/test.html');
    page = require('./main.po');
  });

  it('should include binding test.aaa data', function() {
      // 取绑定数据 方式1
      element(by.binding('test.aaa')).getText().then(function (aaa) {
          expect(aaa).toBe('bbbbbbbbbbbbbcccc');
      });
      // 取绑定数据 方式2
      expect(element(by.binding('test.aaa')).getText()).toBe('bbbbbbbbbbbbbcccc');

      // 获取div
      element(by.css('div')).getText().then(function (aaa) {
          console.log(aaa);
      })
  });

});
