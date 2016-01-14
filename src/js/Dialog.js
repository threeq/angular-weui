/**
 * Created by three on 16/1/13.
 */

(function (app) {
    app.provider('WuDialog', [function () {
        var _self = this;

        _self.$get = ['$wuModal',function ($wuModal) {
            return {
                open: function (config) {
                    config.buttons = config.buttons || [
                        {
                            action:'ok',
                            title:'确定',
                            class: 'default',
                            value:'ok'
                        }
                    ];

                    return $wuModal.open({
                        backdrop: false,
                        windowTemplateUrl: 'weui/template/wu-window.html',
                        template: '<div wu-dialog-default-template></div>',
                        controller: ['$scope', function ($scope) {
                            $scope.title = config.title;
                            $scope.content = config.content;
                            $scope.buttons = config.buttons;

                            $scope.clickBtn = function (btn) {
                                if(btn.action.toLowerCase()==='ok') {
                                    $scope.$close(btn.value);
                                } else {
                                    $scope.$dismiss(btn.value);
                                }
                            }
                        }]
                    })
                },
                alert: function(config){
                    return this.open({
                        title: config.title,
                        content: config.content
                    });
                },
                confirm: function(config) {
                    return this.open({
                        title: config.title,
                        content: config.content,
                        buttons: [
                            {
                                action:'cancel',
                                title:'取消',
                                class: 'default',
                                value:'cancel'
                            },
                            {
                                action:'ok',
                                title:'确定',
                                class: 'primary',
                                value:'ok'
                            }
                        ]
                    });
                }
            }
        }];
    }])
        .directive('wuDialogDefaultTemplate', [function () {
            return {
                restrict: 'A',
                templateUrl: 'weui/template/dialog/default.html',
                link: function (scope, element, attrs) {
                    var mask = element.find('.weui_mask');
                    mask.on('click', function () {
                        scope.$apply(function () {
                            scope.$dismiss('mask:click');
                        });
                    });

                    var openedClass = 'weui_dialog_alert';
                    if(scope.buttons.length>1) {
                        openedClass= 'weui_dialog_confirm'
                    }
                    element.addClass(openedClass).find('.weui_dialog_bd').html(scope.content);
                }
            };
        }])
    ;
})(angular.module('weui.dialog'));