/**
 *
 * @Date 16/10/6
 * @User three
 */

(function(app){
    app.directive('loadingEnable', [function () {
        return {
            restrict: 'A',
            replace:true,
            templateUrl: 'weui/template/loading/loading.html',
            transclude:true,
            link: function ($scope, $element, $attrs) {

            }
        }
    }])
})(angular.module('ng.weui.loading'), window);