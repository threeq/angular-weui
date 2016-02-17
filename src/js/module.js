
'use strict';
angular.module('weui.core',[]);

/**
 * 企业号/服务号jssdk封装
 */
angular.module('weui.jssdk',[]);

angular.module('weui.button',[]);
angular.module('weui.progress',[]);
angular.module('weui.dialog',['weui.core']);
angular.module('weui.actionsheet',['weui.core']);
angular.module('weui.toast',['weui.core']);
angular.module('weui',[
    'weui.core',
    'weui.button',
    'weui.actionsheet',
    'weui.dialog',
    'weui.toast',
    'weui.progress'
]);