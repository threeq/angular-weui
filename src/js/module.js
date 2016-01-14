/**
 * Created by three on 16/1/13.
 */
'use strict';
angular.module('weui.core',[]);

angular.module('weui.button',[]);
angular.module('weui.dialog',['weui.core']);
angular.module('weui.actionsheet',['weui.core']);
angular.module('weui.toast',['weui.core']);
angular.module('weui',[
    'weui.core',
    'weui.button',
    'weui.actionsheet',
    'weui.dialog',
    'weui.toast'
]);