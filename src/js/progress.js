/**
 * Created by three on 16/1/14.
 */

(function (app) {
    app.directive('wuProgress',[function () {
        return {
            restrict:'EA',
            replace: true,
            scope: {
                wuProgress:"=",
                wuColor:'=',
                wuHeight:'='
            },
            transclude:true,
            template:'\
            <div class="weui-progress"> \
                <div class="weui-progress__bar"  data-ng-style="{height: filterHeight(wuHeight) }"> \
                    <div class="weui-progress__inner-bar" data-ng-style="{\
                        width: filterProgress(wuProgress),\
                        \'background-color\': wuColor\
                    }"></div> \
                </div> \
                <a href="javascript:;" class="weui-progress__opr" data-ng-transclude> \
                </a> \
            </div>',
            link: function (scope, element, attrs) {
                scope.filterProgress = function (number) {
                    if(number>100) {
                        return '100%';
                    }
                    if(number<0) {
                        return '0%';
                    }
                    return parseFloat(number)+'%';
                };
                scope.filterHeight = function (height) {
                    return ((height && height>1)?height:3)+'px';
                }
            }
        }
    }]);
})(angular.module('ng.weui.progress'));
