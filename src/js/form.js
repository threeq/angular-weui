/**
 * 常用form组件封装,包含表单验证
 */
(function (app) {
    // input-text
    // input-textarea
    // input-file
    // input-image
    // input-date
    // input-map
    // input-address
    // input-phone
    // input-email
    // input-number
    // input-search
    // input-select
    // input-checkbox
    // input-radio
    // input-switch
    /**
     * TODO 还不知道是否必要 form 组件
     */
    app.directive('inputTextarea',[function () {

        return {
            restrict:'EA',
            replace: true,
            templateUrl:'weui/template/form/input-textarea.html',
            require:'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                ngModelCtrl.$render = function() {
                    console.log()
                }
            }
        }
    }]);

    /**
     * 微信上传图片
     * TODO 需要识别微信手机端和微信pc端,需要微信jssdk支持
     */
    app.directive('inputImage', [function () {
        return {
            restrict:'EA',
            replace: true,
            templateUrl:'weui/template/form/input-image.html',
            require:'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                ngModelCtrl.$render = function() {
                    console.log()
                }
            }
        }
    }])
})(angular.module('ng.weui.form'));
