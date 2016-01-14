/**
 * Created by three on 16/1/13.
 */

(function (app) {
    app.directive('wuClick',['$parse','$timeout','$rootScope',function ($parse,$timeout,$rootScope) {
        return {
            restrict:'EA',
            compile: function (element, attrs) {

                var wuClickFn = $parse(attrs['wuClick']);
                var wuIntervalFn = $parse(attrs['wuInterval'] || '300');

                return function (scope, element, attrs) {
                    var wuInterval = parseInt(wuIntervalFn(scope));
                    var isBusy = false;

                    element.on('click', function(event) {
                        if(!isBusy) {
                            scope.$apply(function() {
                                wuClickFn(scope, {$event:event});
                            });

                            element.attr('disabled','disabled').addClass('weui_btn_disabled');
                            isBusy = true;
                            $timeout(function () {
                                element.removeAttr('disabled').removeClass('weui_btn_disabled');
                                isBusy = false;
                            },wuInterval);
                        }

                    })
                };
            }
        }
    }])
})(angular.module('weui.button'));