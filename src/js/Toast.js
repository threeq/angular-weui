/**
 * Created by three on 16/1/13.
 */

(function (app) {
    app.provider('WuToast',[function () {
        var _self = this;

        _self.$get = ['$wuModal','$timeout',function ($wuModal,$timeout) {
            return {
                complete: function (config) {
                    config = config || {};
                    var toastInstance = $wuModal.open({
                        backdrop: false,
                        windowTemplateUrl:'weui/template/wu-window.html',
                        templateUrl:'weui/template/toast/complete.html',
                        controller:['$scope', function ($scope) {
                            $scope.message = config.message || '已完成';
                        }]
                    });
                    if(config.hasOwnProperty('time')) {
                        $timeout(function () {
                            toastInstance.close();
                        }, parseInt(config.time))
                    }
                    return {
                        close: function () {
                            toastInstance.close();
                        }
                    }
                },
                loading: function (config) {
                    config = config || {};
                    var toastInstance = $wuModal.open({
                        backdrop: false,
                        windowTemplateUrl:'weui/template/wu-window.html',
                        templateUrl:'weui/template/toast/loading.html',
                        controller:['$scope', function ($scope) {
                            $scope.message = config.message || '数据加载中';
                        }]
                    });
                    return {
                        close: function () {
                            toastInstance.close();
                        }
                    }
                }
            }
        }];
    }])
})(angular.module('weui.toast'));