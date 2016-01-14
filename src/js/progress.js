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
            template:'\
            <div class="weui_progress"> \
                <div class="weui_progress_bar"  data-ng-style="{height: filterHeight(wuHeight) }"> \
                    <div class="weui_progress_inner_bar" data-ng-style="{\
                        width: filterProgress(wuProgress),\
                        \'background-color\': wuColor\
                    }"></div> \
                </div> \
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
})(angular.module('weui.progress'));