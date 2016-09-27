/**
 * Created by three on 16/1/13.
 */

/**
 * ActionSheet 封装
 */
(function (app) {
    app.provider('WuActionSheet',[function () {
        var _self = this;

        _self.$get = ['$wuModal',function ($wuModal) {
            return {
                open: function(config){
                    return $wuModal.open({
                        backdrop: false,
                        windowTemplateUrl:'weui/template/wu-window.html',
                        template:'<div wu-action-sheet-template></div>',
                        controller:['$scope', function ($scope) {
                            $scope.btnGroups = config.btnGroups || [
                                    {
                                        action: 'Cancel',
                                        buttons:[
                                            { title: '取消', value: 'cancel'}
                                        ]
                                    }
                                ];

                            $scope.triggerBtn = function(group, btn) {
                                var action = group.action.toLowerCase();
                                if(action==='ok'){
                                    $scope.$close(btn.value);
                                } else {
                                    $scope.$dismiss(btn.value);
                                }
                            }
                        }]
                    });
                }
            }
        }];
    }])
        .directive('wuActionSheetTemplate',['$q', function ($q) {
            return {
                restrict:'A',
                templateUrl:'weui/template/action-sheet/action-sheet.html',
                link: function (scope, element, attrs) {
                    var mask = element.find('.weui-mask_transparent.actionsheet__mask');
                    var actionSheet = element.find('.weui-actionsheet');

                    /**
                     * 打开初始化
                     */
                    (function () {
                        mask.show().addClass('actionsheet__mask_show').on('click',function () {
                            closeActionSheetAnimate(actionSheet, mask).then(function () {
                                scope.$dismiss('mask:click');
                            })
                        });
                        actionSheet.addClass('weui-actionsheet_toggle');
                    })();

                    /**
                     * 点击按钮
                     * @param group
                     * @param btn
                     */
                    scope.clickBtn = function(group, btn) {
                        closeActionSheetAnimate(actionSheet, mask).then(function () {
                            scope.triggerBtn(group, btn);
                        });
                    };

                    /**
                     * 关闭ActionSheet动画
                     * @param actionSheet
                     * @param mask
                     * @returns {*}
                     */
                    function closeActionSheetAnimate(actionSheet, mask) {
                        return $q(function (resovle, reject) {
                            actionSheet.removeClass('weui-actionsheet_toggle');
                            mask.removeClass('actionsheet__mask_show');
                            actionSheet.on('transitionend', function () {
                                mask.hide();
                                resovle();
                            }).on('webkitTransitionEnd', function () {
                                mask.hide();
                                resovle();
                            })
                        });
                    }
                }
            }
        }])
;
})(angular.module('weui.actionsheet'));
