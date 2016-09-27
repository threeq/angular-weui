
'use strict';
angular.module('ng.weui.core',[]);

/**
 * 企业号/服务号jssdk封装
 */
angular.module('ng.weui.jssdk',[]);

angular.module('ng.weui.button',[]);
angular.module('ng.weui.progress',[]);
angular.module('ng.weui.dialog',['ng.weui.core']);
angular.module('ng.weui.actionsheet',['ng.weui.core']);
angular.module('ng.weui.toast',['ng.weui.core']);
angular.module('ng.weui.form',['ng.weui.core']);
angular.module('ng.weui',[
    'ng.weui.core',
    'ng.weui.button',
    'ng.weui.actionsheet',
    'ng.weui.dialog',
    'ng.weui.toast',
    'ng.weui.form',
    'ng.weui.progress'
]);
