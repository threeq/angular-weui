
'use strict';
angular.module('ng.weui.core',[]);

/**
 * 企业号/服务号jssdk封装
 */
angular.module('ng.weui.jssdk',[]);
/**
 * swiper 封装
 */
angular.module('ng.weui.swiper', ['ng.weui.core']);

angular.module('ng.weui.button',[]);
angular.module('ng.weui.progress',[]);
angular.module('ng.weui.dialog',['ng.weui.core']);
angular.module('ng.weui.actionsheet',['ng.weui.core']);
angular.module('ng.weui.toast',['ng.weui.core']);
angular.module('ng.weui.form',['ng.weui.core']);
angular.module('ng.weui.gallery',['ng.weui.core', 'ng.weui.swiper']);
angular.module('ng.weui.loading',['ng.weui.core']);
angular.module('ng.weui',[
    'ng.weui.core',
    'ng.weui.button',
    'ng.weui.actionsheet',
    'ng.weui.dialog',
    'ng.weui.toast',
    'ng.weui.form',
    'ng.weui.gallery',
    'ng.weui.loading',
    'ng.weui.progress'
]);
