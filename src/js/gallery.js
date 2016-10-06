/**
 *
 * @Date 16/10/6
 * @User three
 */

(function (app) {
    /**
     * 调用微信js api 演示图片预览
     * TODO 现在还不知道必须要这个组件
     */
    app.factory('previewImage', [function () {
        return {
            show: function () {

            }
        }
    }]);

    /**
     * h5 实现预览功能
     */
    app.directive('gallery', [function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'weui/template/gallery/gallery.html',
            scope: {
                image: "=",
                action: '&'
            },
            link: function (scope, element, attrs) {
                element.hide();
                scope.clickElement = function () {
                    element.hide();
                };

                /**
                 * 用户操作回调
                 */
                scope.clickBtn = function (e) {
                    scope.action && scope.action({
                                                     image: scope.image
                                                 });
                    e.preventDefault();
                };

                /**
                 * 监听图片变化
                 */
                scope.$watch('image', function(){
                    if(scope.image) {
                        element.show();
                    } else {
                        element.hide();
                    }
                });
            }
        }
    }])
})(angular.module('ng.weui.gallery'));