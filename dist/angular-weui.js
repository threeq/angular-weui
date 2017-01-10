
'use strict';
angular.module('ng.weui.core',[]);

/**
 * 企业号/服务号jssdk封装
 */
angular.module('ng.weui.jssdk',[]);
/**
 * swiper 封装
 */
angular.module('ng.weui.swiper', ['ng.weui.core']);

angular.module('ng.weui.button',[]);
angular.module('ng.weui.progress',[]);
angular.module('ng.weui.dialog',['ng.weui.core']);
angular.module('ng.weui.actionsheet',['ng.weui.core']);
angular.module('ng.weui.toast',['ng.weui.core']);
angular.module('ng.weui.form',['ng.weui.core']);
angular.module('ng.weui.gallery',['ng.weui.core', 'ng.weui.swiper']);
angular.module('ng.weui.loading',['ng.weui.core']);
angular.module('ng.weui',[
    'ng.weui.core',
    'ng.weui.button',
    'ng.weui.actionsheet',
    'ng.weui.dialog',
    'ng.weui.toast',
    'ng.weui.form',
    'ng.weui.gallery',
    'ng.weui.loading',
    'ng.weui.progress'
]);

angular.module("ng.weui").run(["$templateCache", function($templateCache) {$templateCache.put("weui/template/wu-window.html","<div wu-modal-transclude=\"\"></div>");
$templateCache.put("weui/template/action-sheet/action-sheet.html","<div class=\"weui-mask_transparent actionsheet__mask\" style=\"display: none; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);\"></div><div class=\"weui-actionsheet\"><div data-ng-class=\"{\'weui-actionsheet__menu\':$first, \'weui-actionsheet__action\':!$first}\" data-ng-repeat=\"group in btnGroups\"><div class=\"weui-actionsheet__cell\" data-ng-click=\"clickBtn(group, btn)\" data-ng-repeat=\"btn in group.buttons\">{{btn.title}}</div></div></div>");
$templateCache.put("weui/template/dialog/android.html","<div><div class=\"weui-mask\"></div><div class=\"weui-dialog weui-skin_android\"><div class=\"weui-dialog__hd\" data-ng-if=\"title\"><strong class=\"weui-dialog__title\" data-ng-bind=\"title\"></strong></div><div class=\"weui-dialog__bd\" unsafe-show-html=\"content\"></div><div class=\"weui-dialog__ft\"><a href=\"javascript:;\" class=\"weui-dialog__btn {{btn.class}}\" data-ng-repeat=\"btn in buttons\" data-ng-bind=\"btn.title\" data-ng-click=\"clickBtn(btn)\"></a></div></div></div>");
$templateCache.put("weui/template/dialog/default.html","<div><div class=\"weui-mask\"></div><div class=\"weui-dialog\"><div class=\"weui-dialog__hd\" data-ng-if=\"title\"><strong class=\"weui-dialog__title\" data-ng-bind=\"title\"></strong></div><div class=\"weui-dialog__bd\" unsafe-show-html=\"content\"></div><div class=\"weui-dialog__ft\"><a href=\"javascript:;\" class=\"weui-dialog__btn {{btn.class}}\" data-ng-repeat=\"btn in buttons\" data-ng-bind=\"btn.title\" data-ng-click=\"clickBtn(btn)\"></a></div></div></div>");
$templateCache.put("weui/template/form/input-image.html","<div class=\"weui-cell\"><div class=\"weui-cell__bd\"><div class=\"weui-uploader\"><div class=\"weui-uploader__hd\"><p class=\"weui-uploader__title\">图片上传</p><div class=\"weui-uploader__info\">0/2</div></div><div class=\"weui-uploader__bd\"><ul class=\"weui-uploader__files\" id=\"uploaderFiles\"><li class=\"weui-uploader__file\" style=\"background-image:url(./images/pic_160.png)\"></li><li class=\"weui-uploader__file\" style=\"background-image:url(./images/pic_160.png)\"></li><li class=\"weui-uploader__file\" style=\"background-image:url(./images/pic_160.png)\"></li><li class=\"weui-uploader__file weui-uploader__file_status\" style=\"background-image:url(./images/pic_160.png)\"><div class=\"weui-uploader__file-content\" status=\"error\"><i class=\"weui-icon-warn\"></i></div><div class=\"weui-uploader__file-content\" status=\"progress\">50%</div></li></ul><div class=\"weui-uploader__input-box\"><input id=\"uploaderInput\" class=\"weui-uploader__input\" type=\"file\" accept=\"image/*\" multiple=\"\"></div></div></div></div></div>");
$templateCache.put("weui/template/form/input-textarea.html","<div class=\"weui-cell\"><div class=\"weui-cell__bd\"><textarea class=\"weui-textarea\" placeholder=\"请输入文本\" rows=\"3\"></textarea><div class=\"weui-textarea-counter\"><span>0</span>/200</div></div></div>");
$templateCache.put("weui/template/gallery/gallery.html","<div class=\"weui-page\" data-ng-click=\"clickElement($event)\"><div class=\"weui-gallery_swiper\"><div class=\"swiper-container swiper-images\" data-ng-class=\"{\'gallery-top\':showThumb}\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide\" data-ng-repeat=\"img in images track by $index\"><span class=\"weui-gallery__img\" data-ng-style=\"{{imageStyle(img)}}\"></span></div></div><div class=\"swiper-button-next swiper-button-white\"></div><div class=\"swiper-button-prev swiper-button-white\"></div></div><div class=\"swiper-container gallery-thumbs\" data-ng-if=\"showThumb\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide\" data-ng-repeat=\"img in images track by $index\" data-ng-style=\"{{imageStyle(img)}}\"></div></div></div></div></div>");
$templateCache.put("weui/template/loading/loading.html","<div class=\"page__bd\"><div class=\"weui-loadmore\"><i class=\"weui-loading\"></i> <span class=\"weui-loadmore__tips\">正在加载</span></div><div class=\"weui-loadmore weui-loadmore_line\"><span class=\"weui-loadmore__tips\">暂无数据</span></div><div class=\"weui-loadmore weui-loadmore_line weui-loadmore_dot\"><span class=\"weui-loadmore__tips\"></span></div><div data-ng-transclude=\"\"></div></div>");
$templateCache.put("weui/template/toast/complete.html","<div class=\"weui-mask_transparent\"></div><div class=\"weui-toast\"><i class=\"weui-icon-success-no-circle weui-icon_toast\"></i><p class=\"weui-toast__content\" data-ng-bind=\"message\"></p></div>");
$templateCache.put("weui/template/toast/loading.html","<div class=\"weui-mask_transparent\"></div><div class=\"weui-toast\"><i class=\"weui-loading weui-icon_toast\"></i><p class=\"weui-toast__content\" data-ng-bind=\"message\"></p></div>");
$templateCache.put("weui/template/toast/message.html","<div class=\"weui-mask_transparent\"></div><div class=\"weui-toast wu_toast_message\"><div data-ng-bind=\"message\"></div></div>");}]);
/**
 *  微信基本js接口
 */
(function (app, window) {
    app.factory('WuWxJsSdk',['$q', function ($q) {
        /**
         * 获取微信js接口对象
         * @param reject <Function>  如果没有js接口对象，调用通知方法
         * @returns {*}   false 或 js接口对象
         */
        function checkWxObj(reject) {
            if(!window.wx) {
                reject({
                    errMsg: '没有js接口对象，请确认是否引入微信js文件'
                });
                return false;
            }
            return window.wx;
        }

        /**
         * 构建接口参数回调
         * @param params  <Object>    参数
         * @param resolve <Function>  成功回调
         * @param reject  <Function>  失败回调
         * @param config  <Object>  失败回调
         * @returns {*}
         */
        function builderParamsCb(params, resolve, reject) {
            params.success = function(res) {
                resolve(res);
            };
            params.fail = function(res) {
                reject(res)
            };
            params.complete = function (res) {

            };
            params.cancel = function () {
                reject({
                    errMsg: '用户取消'
                })
            };
            params.trigger = function () {

            };
            return params;
        }

        var __server = {
            // 权限验证配置
            config: function () {
                return $q(function (resolve, reject) {
                    var wxObj = checkWxObj(reject);
                    if(wxObj) {
                        wxObj.config.apply(window, arguments);
                        wxObj.ready(function(){
                            // 权限配置成功
                            resolve({
                                errMsg: 'config:ok'
                            })
                        });
                        wxObj.error(function(res){
                            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                            reject(res)
                        });
                    }
                });
            }
        };

        // 封装原有js接口
        var jsApiList = [
            //openEnterpriseContact
            'checkJsApi',

            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareWeibo',

            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',

            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'onVoicePlayEnd',
            'uploadVoice',
            'downloadVoice',
            'translateVoice',

            'getNetworkType',

            'openLocation',
            'getLocation',

            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',

            'scanQRCode',

            'startSearchBeacons', //complete
            'stopSearchBeacons', //complete
            'onSearchBeacons',    //complete

            'openProductSpecificView', // 微小店商品页

            'chooseCard',  // 卡券
            'addCard',
            'openCard',
            'consumeAndShareCard',

            'chooseWXPay' // 支付

        ];
        for(var i=0; i<jsApiList.length; i++) {
            var apiName = jsApiList[i];
            __server[apiName] = function (params) {
                    return $q(function (resolve, reject) {
                        var wxObj = checkWxObj(reject);
                        if(wxObj) {
                            wxObj[apiName](builderParamsCb(params, resolve, reject));
                        }
                    });
                };
        }

        // TODO 增加自己的业务逻辑接口

        return __server;
    }]);

})(angular.module('ng.weui.jssdk'), window);

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
                message: function (config) {
                    config = config || {};
                    var toastInstance = $wuModal.open({
                        backdrop: false,
                        windowTemplateUrl:'weui/template/wu-window.html',
                        templateUrl:'weui/template/toast/message.html',
                        controller:['$scope', function ($scope) {
                            $scope.message = config.message || '消息提示';
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
                }
            }
        }];
    }])
})(angular.module('ng.weui.toast'));

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

/**
 *
 * @Date 2016/11/3
 * @User three
 */

(function(window, app, undefined) {

    'use strict';

    app
        .directive('wuSwiperContainer', ['IdWorkerFactory', function (IdWorkerFactory) {
            var IdWorker = IdWorkerFactory('wuSwiperContainer');
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    onReady: '&',
                    slidesPerView: '=',
                    slidesPerColumn: '=',
                    spaceBetween: '=',
                    parallax: '=',
                    parallaxTransition: '@',
                    paginationIsActive: '=',
                    paginationClickable: '=',
                    showNavButtons: '=',
                    showScrollBar: '=',
                    loop: '=',
                    autoplay: '=',
                    initialSlide: '=',
                    containerCls: '@',
                    wrapperCls: '@',
                    paginationCls: '@',
                    slideCls: '@',
                    direction: '@',
                    swiper: '=',
                    overrideParameters: '='
                },
                controller: function($scope, $element, $timeout) {
                    var uuid = IdWorker();

                    $scope.swiper_uuid = uuid;

                    // directive defaults
                    var params = {
                        slidesPerView: $scope.slidesPerView || 1,
                        slidesPerColumn: $scope.slidesPerColumn || 1,
                        spaceBetween: $scope.spaceBetween || 0,
                        direction: $scope.direction || 'horizontal',
                        loop: $scope.loop || false,
                        initialSlide: $scope.initialSlide || 0,
                        showNavButtons: false
                    };

                    if (!angular.isUndefined($scope.autoplay) && typeof $scope.autoplay === 'number') {
                        params = angular.extend({}, params, {
                            autoplay: $scope.autoplay
                        });
                    }

                    if ($scope.paginationIsActive === true) {
                        params = angular.extend({}, params, {
                            paginationClickable: $scope.paginationClickable || true,
                            pagination: '#paginator-' + $scope.swiper_uuid
                        });
                    }

                    if ($scope.showNavButtons === true) {
                        params.nextButton = '#nextButton-' + $scope.swiper_uuid;
                        params.prevButton = '#prevButton-' + $scope.swiper_uuid;
                    }

                    if ($scope.showScrollBar === true) {
                        params.scrollbar = '#scrollBar-' + $scope.swiper_uuid;
                    }

                    if ($scope.overrideParameters) {
                        params = angular.extend({}, params, $scope.overrideParameters);
                    }

                    $timeout(function() {
                        var swiper = null;

                        if (angular.isObject($scope.swiper)) {
                            $scope.swiper = new Swiper($element[0].firstChild, params);
                            swiper = $scope.swiper;
                        } else {
                            swiper = new Swiper($element[0].firstChild, params);
                        }

                        //If specified, calls this function when the swiper object is available
                        if (!angular.isUndefined($scope.onReady)) {
                            $scope.onReady({
                                               swiper: swiper
                                           });
                        }
                    });
                },

                link: function(scope, element) {

                    var uuid = scope.swiper_uuid;

                    var paginatorId = "paginator-" + uuid;
                    var prevButtonId = "prevButton-" + uuid;
                    var nextButtonId = "nextButton-" + uuid;
                    var scrollBarId = 'scrollBar-' + uuid;

                    var containerElement = element[0];

                    angular.element(containerElement.querySelector('.swiper-pagination'))
                        .attr('id', paginatorId);

                    angular.element(containerElement.querySelector('.swiper-button-next'))
                        .attr('id', nextButtonId);

                    angular.element(containerElement.querySelector('.swiper-button-prev'))
                        .attr('id', prevButtonId);

                    angular.element(element[0].querySelector('.swiper-scrollbar'))
                        .attr('id', scrollBarId);
                },

                template: '<div class="swiper-container {{containerCls}}">' +
                          '<div class="parallax-bg" data-swiper-parallax="{{parallaxTransition}}" ng-show="parallax"></div>' +
                          '<div class="swiper-wrapper {{wrapperCls}}" ng-transclude></div>' +
                          '<div class="swiper-pagination {{paginationCls}}"></div>' +
                          '<div class="swiper-button-next" ng-show="showNavButtons"></div>' +
                          '<div class="swiper-button-prev" ng-show="showNavButtons"></div>' +
                          '<div class="swiper-scrollbar" ng-show="showScrollBar"></div>' +
                          '</div>'
            };
        }])
        .directive('wuSwiperSlide', [function SwiperSlide() {
            return {
                restrict: 'E',
                require: '^ksSwiperContainer',
                transclude: true,
                scope: {
                    sliderCls: '@',
                },
                template: '<div class="swiper-slide {{sliderCls}}" ng-transclude></div>',
                replace: true
            };
        }]);

})(window, angular.module('ng.weui.swiper'), undefined);
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
/**
 *
 * @Date 16/10/6
 * @User three
 */

(function (app) {
    /**
     * 调用微信js api 演示图片预览
     */
    app.factory('PreviewImages', ['WuWxJsSdk', function (WuWxJsSdk) {
        return {
            show: function (current, imgList) {
                WuWxJsSdk.previewImage({
                                           current: current,
                                           urls: imgList
                                       });
            }
        }
    }]);
    /**
     * 调用微信js api 演示图片预览指令
     */
    app.directive('previewImages', ['PreviewImages', function (PreviewImages) {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var box = element;
                var selector = attrs.preview? attrs.preview : 'img';
                var attrName = attrs.attrName? attrs.attrName : 'src';

                element.on('click', selector, function (e) {
                    var src = $(this),
                        imgList = [];
                    box.find(selector).each(function (index,item) {
                        imgList.push(item.attr(attrName));
                    });

                    PreviewImages.show(src.attr(attrName), imgList);

                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
            }
        }
    }]);

    /**
     * h5 实现预览功能
     */
    app.directive('gallery', ['$timeout','IdWorkerFactory', function ($timeout,IdWorkerFactory) {

        var galleryIdWorker = IdWorkerFactory.new('weui-gallery_swiper');

        return {
            restrict: 'EA',
            //replace: true,
            templateUrl: 'weui/template/gallery/gallery.html',
            scope: {
                images: "="
            },
            link: function (scope, element, attrs) {

                var galleryId = galleryIdWorker();
                element.attr("id", galleryId);
                element.addClass("weui-gallery");

                element.show();
                //scope.clickElement = function () {
                //    element.hide();
                //};

                ///**
                // * 用户操作回调
                // */
                //scope.clickBtn = function (e) {
                //    scope.action && scope.action({
                //                                     image: scope.image
                //                                 });
                //    e.preventDefault();
                //};

                /**
                 * 显示缩略图
                 * @type {boolean}
                 */
                scope.showThumb = false;
                if(angular.isArray(scope.images) && scope.images.length>0) {

                    if(scope.images[0].hasOwnProperty('thumb')) {
                        scope.showThumb = true;
                    }

                    initSwiper();
                }

                scope.imageStyle = function (image) {
                  return {
                      'background-image': 'url('+image.url+')'
                  }
                };

                function initSwiper() {

                    $timeout(function () {
                        console.log('#'+galleryId+' .swiper-images');

                        var galleryTop = new Swiper('#'+galleryId+' .swiper-images', {
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            spaceBetween: 10,
                            effect: 'coverflow',
                            grabCursor: true,
                            centeredSlides: true,
                            slidesPerView: 'auto',
                            coverflow: {
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows : true
                            }
                        });

                        if(scope.showThumb) {
                            var galleryThumbs = new Swiper('#'+galleryId+' .gallery-thumbs', {
                                spaceBetween: 10,
                                centeredSlides: true,
                                slidesPerView: 'auto',
                                touchRatio: 0.2,
                                slideToClickedSlide: true
                            });
                            galleryTop.params.control = galleryThumbs;
                            galleryThumbs.params.control = galleryTop;
                        }

                    },10)
                }

            }
        }
    }])
})(angular.module('ng.weui.gallery'));


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

/**
 * Created by three on 16/1/13.
 *
 * 目前 `WuDialog` 并不是安全的，需要调用者控制输出的 html 代码防止 xss
 * 可以参考：https://github.com/leizongmin/js-xss
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

                    var template = 'wu-dialog-default-template';
                    if(config.hasOwnProperty('template') && !!config.template) {
                        template = config.template;
                    }
                    return $wuModal.open({
                        backdrop: false,
                        windowTemplateUrl: 'weui/template/wu-window.html',
                        template: '<div '+template+'></div>',
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
    }]);

    var linkFunction = function (scope, element, attrs) {
        var mask = element.find('.weui-mask');
        mask.on('click', function () {
            scope.$apply(function () {
                scope.$dismiss('mask:click');
            });
        });

        var openedClass = 'weui-dialog__alert';
        if(scope.buttons.length>1) {
            openedClass= 'weui-dialog__confirm'
        }
        element.addClass(openedClass);
    }
    app.directive('wuDialogDefaultTemplate', [function () {
            return {
                restrict: 'A',
                templateUrl: 'weui/template/dialog/default.html',
                link: linkFunction
            };
        }])
        .directive('wuDialogAndroidTemplate', [function () {
            return {
                restrict: 'A',
                templateUrl: 'weui/template/dialog/android.html',
                link: linkFunction
            };
        }])
    ;
    /**
     * 表格数据 html 输出
     * 这个会有 xss 风险
     */
    app.directive('unsafeShowHtml', ['$compile', function ($compile) {

      /**
       * html 编码，html源码输出
       * @param {[type]} html [description]
       */
      function HTMLEncode(html) {
        var temp = document.createElement("div");
        (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
        var output = temp.innerHTML;
        temp = null;
        return output;
      }

      return {
        restrict: 'A',
        scope: {
          content: '=unsafeShowHtml'
        },
        link: function (scope, element, attrs) {

          var change = function () {
              var showHtml = '<div>'+scope.content+'</div>';
              element.html('').append($compile(showHtml)(scope));
          };
          //scope.$watch('content', function () {
          change();
          //});
        }
      }
  }]);
})(angular.module('ng.weui.dialog'));

/**
 * Created by three on 16/1/13.
 */
(function (app,window) { app
/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
    .factory('$$stackedMap', function() {
        return {
            createNew: function() {
                var stack = [];

                return {
                    add: function(key, value) {
                        stack.push({
                            key: key,
                            value: value
                        });
                    },
                    get: function(key) {
                        for (var i = 0; i < stack.length; i++) {
                            if (key === stack[i].key) {
                                return stack[i];
                            }
                        }
                    },
                    keys: function() {
                        var keys = [];
                        for (var i = 0; i < stack.length; i++) {
                            keys.push(stack[i].key);
                        }
                        return keys;
                    },
                    top: function() {
                        return stack[stack.length - 1];
                    },
                    remove: function(key) {
                        var idx = -1;
                        for (var i = 0; i < stack.length; i++) {
                            if (key === stack[i].key) {
                                idx = i;
                                break;
                            }
                        }
                        return stack.splice(idx, 1)[0];
                    },
                    removeTop: function() {
                        return stack.splice(stack.length - 1, 1)[0];
                    },
                    length: function() {
                        return stack.length;
                    }
                };
            }
        };
    })
/**
 * A helper, internal data structure that stores all references attached to key
 */
    .factory('$$multiMap', function() {
        return {
            createNew: function() {
                var map = {};

                return {
                    entries: function() {
                        return Object.keys(map).map(function(key) {
                            return {
                                key: key,
                                value: map[key]
                            };
                        });
                    },
                    get: function(key) {
                        return map[key];
                    },
                    hasKey: function(key) {
                        return !!map[key];
                    },
                    keys: function() {
                        return Object.keys(map);
                    },
                    put: function(key, value) {
                        if (!map[key]) {
                            map[key] = [];
                        }

                        map[key].push(value);
                    },
                    remove: function(key, value) {
                        var values = map[key];

                        if (!values) {
                            return;
                        }

                        var idx = values.indexOf(value);

                        if (idx !== -1) {
                            values.splice(idx, 1);
                        }

                        if (!values.length) {
                            delete map[key];
                        }
                    }
                };
            }
        };
    })

/**
 * Pluggable resolve mechanism for the modal resolve resolution
 * Supports UI Router's $resolve service
 */
    .provider('$wuResolve', function() {
        var resolve = this;
        this.resolver = null;

        this.setResolver = function(resolver) {
            this.resolver = resolver;
        };

        this.$get = ['$injector', '$q', function($injector, $q) {
            var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
            return {
                resolve: function(invocables, locals, parent, self) {
                    if (resolver) {
                        return resolver.resolve(invocables, locals, parent, self);
                    }

                    var promises = [];

                    angular.forEach(invocables, function(value) {
                        if (angular.isFunction(value) || angular.isArray(value)) {
                            promises.push($q.resolve($injector.invoke(value)));
                        } else if (angular.isString(value)) {
                            promises.push($q.resolve($injector.get(value)));
                        } else {
                            promises.push($q.resolve(value));
                        }
                    });

                    return $q.all(promises).then(function(resolves) {
                        var resolveObj = {};
                        var resolveIter = 0;
                        angular.forEach(invocables, function(value, key) {
                            resolveObj[key] = resolves[resolveIter++];
                        });

                        return resolveObj;
                    });
                }
            };
        }];
    })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 *//*
    .directive('wuModalBackdrop', ['$animateCss', '$injector', '$wuModalStack',
        function($animateCss, $injector, $modalStack) {
            return {
                replace: true,
                templateUrl: 'wu/template/modal/backdrop.html',
                compile: function(tElement, tAttrs) {
                    tElement.addClass(tAttrs.backdropClass);
                    return linkFn;
                }
            };

            function linkFn(scope, element, attrs) {
                if (attrs.modalInClass) {
                    $animateCss(element, {
                        addClass: attrs.modalInClass
                    }).start();

                    scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
                        var done = setIsAsync();
                        if (scope.modalOptions.animation) {
                            $animateCss(element, {
                                removeClass: attrs.modalInClass
                            }).start().then(done);
                        } else {
                            done();
                        }
                    });
                }
            }
        }])

    .directive('wuModalWindow', ['$wuModalStack', '$q', '$animate', '$animateCss', '$document',
        function($modalStack, $q, $animate, $animateCss, $document) {
            return {
                scope: {
                    index: '@'
                },
                replace: true,
                transclude: true,
                templateUrl: function(tElement, tAttrs) {
                    return tAttrs.templateUrl || 'wu/template/modal/window.html';
                },
                link: function(scope, element, attrs) {
                    element.addClass(attrs.windowClass || '');
                    element.addClass(attrs.windowTopClass || '');
                    scope.size = attrs.size;

                    scope.close = function(evt) {
                        var modal = $modalStack.getTop();
                        if (modal && modal.value.backdrop &&
                            modal.value.backdrop !== 'static' &&
                            evt.target === evt.currentTarget) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            $modalStack.dismiss(modal.key, 'backdrop click');
                        }
                    };

                    // moved from template to fix issue #2280
                    element.on('click', scope.close);

                    // This property is only added to the scope for the purpose of detecting when this directive is rendered.
                    // We can detect that by using this property in the template associated with this directive and then use
                    // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
                    scope.$isRendered = true;

                    // Deferred object that will be resolved when this modal is render.
                    var modalRenderDeferObj = $q.defer();
                    // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
                    // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
                    attrs.$observe('modalRender', function(value) {
                        if (value === 'true') {
                            modalRenderDeferObj.resolve();
                        }
                    });

                    modalRenderDeferObj.promise.then(function() {
                        var animationPromise = null;

                        if (attrs.modalInClass) {
                            animationPromise = $animateCss(element, {
                                addClass: attrs.modalInClass
                            }).start();

                            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
                                var done = setIsAsync();
                                if ($animateCss) {
                                    $animateCss(element, {
                                        removeClass: attrs.modalInClass
                                    }).start().then(done);
                                } else {
                                    $animate.removeClass(element, attrs.modalInClass).then(done);
                                }
                            });
                        }


                        $q.when(animationPromise).then(function() {
                            /!**
                             * If something within the freshly-opened modal already has focus (perhaps via a
                             * directive that causes focus). then no need to try and focus anything.
                             *!/
                            if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
                                var inputWithAutofocus = element[0].querySelector('[autofocus]');
                                /!**
                                 * Auto-focusing of a freshly-opened modal element causes any child elements
                                 * with the autofocus attribute to lose focus. This is an issue on touch
                                 * based devices which will show and then hide the onscreen keyboard.
                                 * Attempts to refocus the autofocus element via JavaScript will not reopen
                                 * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
                                 * the modal element if the modal does not contain an autofocus element.
                                 *!/
                                if (inputWithAutofocus) {
                                    inputWithAutofocus.focus();
                                } else {
                                    element[0].focus();
                                }
                            }
                        });

                        // Notify {@link $modalStack} that modal is rendered.
                        var modal = $modalStack.getTop();
                        if (modal) {
                            $modalStack.modalRendered(modal.key);
                        }
                    });
                }
            };
        }])

    .directive('wuModalAnimationClass', function() {
        return {
            compile: function(tElement, tAttrs) {
                if (tAttrs.modalAnimation) {
                    tElement.addClass(tAttrs.wuModalAnimationClass);
                }
            }
        };
    })
*/
    .directive('wuModalTransclude', function() {
        return {
            link: function(scope, element, attrs, controller, transclude) {
                transclude(scope.$parent, function(clone) {
                    element.empty();
                    element.append(clone);
                });
            }
        };
    })

    .factory('$wuModalStack', ['$animate', '$animateCss', '$document',
        '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap',
        function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap) {
            var OPENED_MODAL_CLASS = 'modal-open';

            var backdropDomEl, backdropScope;
            var openedWindows = $$stackedMap.createNew();
            var openedClasses = $$multiMap.createNew();
            var $modalStack = {
                NOW_CLOSING_EVENT: 'modal.stack.now-closing'
            };

            //Modal focus behavior
            var focusableElementList;
            var focusIndex = 0;
            var tababbleSelector = 'a[href], area[href], input:not([disabled]), ' +
                'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
                'iframe, object, embed, *[tabindex], *[contenteditable=true]';

            function backdropIndex() {
                var topBackdropIndex = -1;
                var opened = openedWindows.keys();
                for (var i = 0; i < opened.length; i++) {
                    if (openedWindows.get(opened[i]).value.backdrop) {
                        topBackdropIndex = i;
                    }
                }
                return topBackdropIndex;
            }

            $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
                if (backdropScope) {
                    backdropScope.index = newBackdropIndex;
                }
            });

            function removeModalWindow(modalInstance, elementToReceiveFocus) {
                var modalWindow = openedWindows.get(modalInstance).value;
                var appendToElement = modalWindow.appendTo;

                //clean up the stack
                openedWindows.remove(modalInstance);

                removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
                    var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
                    openedClasses.remove(modalBodyClass, modalInstance);
                    appendToElement.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
                    toggleTopWindowClass(true);
                });
                checkRemoveBackdrop();

                //move focus to specified element if available, or else to body
                if (elementToReceiveFocus && elementToReceiveFocus.focus) {
                    elementToReceiveFocus.focus();
                } else if (appendToElement.focus) {
                    appendToElement.focus();
                }
            }

            // Add or remove "windowTopClass" from the top window in the stack
            function toggleTopWindowClass(toggleSwitch) {
                var modalWindow;

                if (openedWindows.length() > 0) {
                    modalWindow = openedWindows.top().value;
                    modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
                }
            }

            function checkRemoveBackdrop() {
                //remove backdrop if no longer needed
                if (backdropDomEl && backdropIndex() === -1) {
                    var backdropScopeRef = backdropScope;
                    removeAfterAnimate(backdropDomEl, backdropScope, function() {
                        backdropScopeRef = null;
                    });
                    backdropDomEl = undefined;
                    backdropScope = undefined;
                }
            }

            function removeAfterAnimate(domEl, scope, done, closedDeferred) {
                var asyncDeferred;
                var asyncPromise = null;
                var setIsAsync = function() {
                    if (!asyncDeferred) {
                        asyncDeferred = $q.defer();
                        asyncPromise = asyncDeferred.promise;
                    }

                    return function asyncDone() {
                        asyncDeferred.resolve();
                    };
                };
                scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);

                // Note that it's intentional that asyncPromise might be null.
                // That's when setIsAsync has not been called during the
                // NOW_CLOSING_EVENT broadcast.
                return $q.when(asyncPromise).then(afterAnimating);

                function afterAnimating() {
                    if (afterAnimating.done) {
                        return;
                    }
                    afterAnimating.done = true;

                    $animateCss(domEl, {
                        event: 'leave'
                    }).start().then(function() {
                        domEl.remove();
                        if (closedDeferred) {
                            closedDeferred.resolve();
                        }
                    });

                    scope.$destroy();
                    if (done) {
                        done();
                    }
                }
            }

            $document.on('keydown', keydownListener);

            $rootScope.$on('$destroy', function() {
                $document.off('keydown', keydownListener);
            });

            function keydownListener(evt) {
                if (evt.isDefaultPrevented()) {
                    return evt;
                }

                var modal = openedWindows.top();
                if (modal) {
                    switch (evt.which) {
                        case 27: {
                            if (modal.value.keyboard) {
                                evt.preventDefault();
                                $rootScope.$apply(function() {
                                    $modalStack.dismiss(modal.key, 'escape key press');
                                });
                            }
                            break;
                        }
                        case 9: {
                            $modalStack.loadFocusElementList(modal);
                            var focusChanged = false;
                            if (evt.shiftKey) {
                                if ($modalStack.isFocusInFirstItem(evt)) {
                                    focusChanged = $modalStack.focusLastFocusableElement();
                                }
                            } else {
                                if ($modalStack.isFocusInLastItem(evt)) {
                                    focusChanged = $modalStack.focusFirstFocusableElement();
                                }
                            }

                            if (focusChanged) {
                                evt.preventDefault();
                                evt.stopPropagation();
                            }
                            break;
                        }
                    }
                }
            }

            $modalStack.open = function(modalInstance, modal) {
                var modalOpener = $document[0].activeElement,
                    modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;

                toggleTopWindowClass(false);

                openedWindows.add(modalInstance, {
                    deferred: modal.deferred,
                    renderDeferred: modal.renderDeferred,
                    closedDeferred: modal.closedDeferred,
                    modalScope: modal.scope,
                    backdrop: modal.backdrop,
                    keyboard: modal.keyboard,
                    openedClass: modal.openedClass,
                    windowTopClass: modal.windowTopClass,
                    animation: modal.animation,
                    appendTo: modal.appendTo
                });

                openedClasses.put(modalBodyClass, modalInstance);

                var appendToElement = modal.appendTo,
                    currBackdropIndex = backdropIndex();

                if (!appendToElement.length) {
                    throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
                }

                if (currBackdropIndex >= 0 && !backdropDomEl) {
                    backdropScope = $rootScope.$new(true);
                    backdropScope.modalOptions = modal;
                    backdropScope.index = currBackdropIndex;
                    backdropDomEl = angular.element('<div wu-modal-backdrop="modal-backdrop"></div>');
                    backdropDomEl.attr('backdrop-class', modal.backdropClass);
                    if (modal.animation) {
                        backdropDomEl.attr('modal-animation', 'true');
                    }
                    $compile(backdropDomEl)(backdropScope);
                    $animate.enter(backdropDomEl, appendToElement);
                }

                var angularDomEl = angular.element('<div wu-modal-window="modal-window"></div>');
                angularDomEl.attr({
                    'template-url': modal.windowTemplateUrl,
                    'window-class': modal.windowClass,
                    'window-top-class': modal.windowTopClass,
                    'size': modal.size,
                    'index': openedWindows.length() - 1,
                    'animate': 'animate'
                }).html(modal.content);
                if (modal.animation) {
                    angularDomEl.attr('modal-animation', 'true');
                }

                $animate.enter(angularDomEl, appendToElement)
                    .then(function() {
                        $compile(angularDomEl)(modal.scope);
                        $animate.addClass(appendToElement, modalBodyClass);
                    });

                openedWindows.top().value.modalDomEl = angularDomEl;
                openedWindows.top().value.modalOpener = modalOpener;

                $modalStack.clearFocusListCache();
            };

            function broadcastClosing(modalWindow, resultOrReason, closing) {
                return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
            }

            $modalStack.close = function(modalInstance, result) {
                var modalWindow = openedWindows.get(modalInstance);
                if (modalWindow && broadcastClosing(modalWindow, result, true)) {
                    modalWindow.value.modalScope.$$wuDestructionScheduled = true;
                    modalWindow.value.deferred.resolve(result);
                    removeModalWindow(modalInstance, modalWindow.value.modalOpener);
                    return true;
                }
                return !modalWindow;
            };

            $modalStack.dismiss = function(modalInstance, reason) {
                var modalWindow = openedWindows.get(modalInstance);
                if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
                    modalWindow.value.modalScope.$$wuDestructionScheduled = true;
                    modalWindow.value.deferred.reject(reason);
                    removeModalWindow(modalInstance, modalWindow.value.modalOpener);
                    return true;
                }
                return !modalWindow;
            };

            $modalStack.dismissAll = function(reason) {
                var topModal = this.getTop();
                while (topModal && this.dismiss(topModal.key, reason)) {
                    topModal = this.getTop();
                }
            };

            $modalStack.getTop = function() {
                return openedWindows.top();
            };

            $modalStack.modalRendered = function(modalInstance) {
                var modalWindow = openedWindows.get(modalInstance);
                if (modalWindow) {
                    modalWindow.value.renderDeferred.resolve();
                }
            };

            $modalStack.focusFirstFocusableElement = function() {
                if (focusableElementList.length > 0) {
                    focusableElementList[0].focus();
                    return true;
                }
                return false;
            };
            $modalStack.focusLastFocusableElement = function() {
                if (focusableElementList.length > 0) {
                    focusableElementList[focusableElementList.length - 1].focus();
                    return true;
                }
                return false;
            };

            $modalStack.isFocusInFirstItem = function(evt) {
                if (focusableElementList.length > 0) {
                    return (evt.target || evt.srcElement) === focusableElementList[0];
                }
                return false;
            };

            $modalStack.isFocusInLastItem = function(evt) {
                if (focusableElementList.length > 0) {
                    return (evt.target || evt.srcElement) === focusableElementList[focusableElementList.length - 1];
                }
                return false;
            };

            $modalStack.clearFocusListCache = function() {
                focusableElementList = [];
                focusIndex = 0;
            };

            $modalStack.loadFocusElementList = function(modalWindow) {
                if (focusableElementList === undefined || !focusableElementList.length) {
                    if (modalWindow) {
                        var modalDomE1 = modalWindow.value.modalDomEl;
                        if (modalDomE1 && modalDomE1.length) {
                            focusableElementList = modalDomE1[0].querySelectorAll(tababbleSelector);
                        }
                    }
                }
            };

            return $modalStack;
        }])

    .provider('$wuModal', function() {
        var $modalProvider = {
            options: {
                animation: true,
                backdrop: true, //can also be false or 'static'
                keyboard: true
            },
            $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$wuResolve', '$wuModalStack',
                function ($rootScope, $q, $document, $templateRequest, $controller, $wuResolve, $modalStack) {
                    var $modal = {};

                    function getTemplatePromise(options) {
                        return options.template ? $q.when(options.template) :
                            $templateRequest(angular.isFunction(options.templateUrl) ?
                                options.templateUrl() : options.templateUrl);
                    }

                    var promiseChain = null;
                    $modal.getPromiseChain = function() {
                        return promiseChain;
                    };

                    $modal.open = function(modalOptions) {
                        var modalResultDeferred = $q.defer();
                        var modalOpenedDeferred = $q.defer();
                        var modalClosedDeferred = $q.defer();
                        var modalRenderDeferred = $q.defer();

                        //prepare an instance of a modal to be injected into controllers and
                        // returned to a caller
                        var modalInstance = {
                            result: modalResultDeferred.promise,
                            opened: modalOpenedDeferred.promise,
                            closed: modalClosedDeferred.promise,
                            rendered: modalRenderDeferred.promise,
                            close: function (result) {
                                return $modalStack.close(modalInstance, result);
                            },
                            dismiss: function (reason) {
                                return $modalStack.dismiss(modalInstance, reason);
                            }
                        };

                        //merge and clean up options
                        modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
                        modalOptions.resolve = modalOptions.resolve || {};
                        modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);

                        //verify options
                        if (!modalOptions.template && !modalOptions.templateUrl) {
                            throw new Error('One of template or templateUrl options is required.');
                        }

                        var templateAndResolvePromise =
                            $q.all([getTemplatePromise(modalOptions), $wuResolve.resolve(modalOptions.resolve, {}, null, null)]);

                        function resolveWithTemplate() {
                            return templateAndResolvePromise;
                        }

                        // Wait for the resolution of the existing promise chain.
                        // Then switch to our own combined promise dependency (regardless of how
                        // the previous modal fared). Then add to $modalStack and resolve opened.
                        // Finally clean up the chain variable if no subsequent modal has
                        // overwritten it.
                        var samePromise;
                        samePromise = promiseChain = $q.all([promiseChain])
                            .then(resolveWithTemplate, resolveWithTemplate)
                            .then(function resolveSuccess(tplAndVars) {
                                var providedScope = modalOptions.scope || $rootScope;

                                var modalScope = providedScope.$new();
                                modalScope.$close = modalInstance.close;
                                modalScope.$dismiss = modalInstance.dismiss;

                                modalScope.$on('$destroy', function() {
                                    if (!modalScope.$$wuDestructionScheduled) {
                                        modalScope.$dismiss('$wuUnscheduledDestruction');
                                    }
                                });

                                var ctrlInstance, ctrlLocals = {};

                                //controllers
                                if (modalOptions.controller) {
                                    ctrlLocals.$scope = modalScope;
                                    ctrlLocals.$wuModalInstance = modalInstance;
                                    angular.forEach(tplAndVars[1], function(value, key) {
                                        ctrlLocals[key] = value;
                                    });

                                    ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
                                    if (modalOptions.controllerAs) {
                                        if (modalOptions.bindToController) {
                                            ctrlInstance.$close = modalScope.$close;
                                            ctrlInstance.$dismiss = modalScope.$dismiss;
                                            angular.extend(ctrlInstance, providedScope);
                                        }

                                        modalScope[modalOptions.controllerAs] = ctrlInstance;
                                    }
                                }

                                $modalStack.open(modalInstance, {
                                    scope: modalScope,
                                    deferred: modalResultDeferred,
                                    renderDeferred: modalRenderDeferred,
                                    closedDeferred: modalClosedDeferred,
                                    content: tplAndVars[0],
                                    animation: modalOptions.animation,
                                    backdrop: modalOptions.backdrop,
                                    keyboard: modalOptions.keyboard,
                                    backdropClass: modalOptions.backdropClass,
                                    windowTopClass: modalOptions.windowTopClass,
                                    windowClass: modalOptions.windowClass,
                                    windowTemplateUrl: modalOptions.windowTemplateUrl,
                                    size: modalOptions.size,
                                    openedClass: modalOptions.openedClass,
                                    appendTo: modalOptions.appendTo
                                });
                                modalOpenedDeferred.resolve(true);

                            }, function resolveError(reason) {
                                modalOpenedDeferred.reject(reason);
                                modalResultDeferred.reject(reason);
                            })['finally'](function() {
                            if (promiseChain === samePromise) {
                                promiseChain = null;
                            }
                        });

                        return modalInstance;
                    };

                    return $modal;
                }
            ]
        };

        return $modalProvider;
    });

    /**
     * 客户端检测代码
     */
    window.weui_client_browser_checker = (function () {
        // 呈现引擎
        var engine = {
            ie: 0,
            gecko: 0,
            webkit: 0,
            khtml: 0,
            opera: 0,
            // 完整的版本号
            ver: null
        };

        // 浏览器
        var browser = {
            // 主要浏览器
            ie: 0,
            firefox: 0,
            safari: 0,
            konq: 0,
            opera: 0,
            chrome: 0,
            wx: 0,
            wxpc: 0,
            // 具体的版本号
            ver: null
        };

        // 平台、设备和操作系统
        var system = {
            win: false,
            mac: false,
            x11: false,

            // 移动设备
            iphone: false,
            ipod: false,
            ipad: false,
            ios: false,
            android: false,
            nokiaN: false,
            winMobile: false,

            //游戏系统
            wii: false,
            ps: false
        };

        // 检测呈现引擎和浏览器
        var ua = navigator.userAgent;
        if (window.opera) {
            engine.ver = browser.ver = window.opera.version();
            engine.opera = browser.opera = parseFloat(engine.ver);
        } else if (/AppleWebKit\/(\S+)/.test(ua)) {
            engine.ver = RegExp["$1"];
            engine.webkit = parseFloat(engine.ver);

            // 确定是 chrome 还是 safari
            if (/Chrome\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.chrome = parseFloat(browser.ver);
            } else if (/Version\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.safari = parseFloat(browser.ver);
            } else {
                // 近似地确定版本号
                var safariVersion = 1;
                if (engine.webkit < 100) {
                    safariVersion = 1;
                } else if (engine.webkit < 312) {
                    safariVersion = 1.2;
                } else if (engine.webkit < 412) {
                    safariVersion = 1.3;
                } else {
                    safariVersion = 2;
                }
                browser.safari = browser.ver = safariVersion;
            }
        } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+])/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"];
            engine.khtml = browser.konq = parseFloat(engine.ver);
        } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
            engine.ver = RegExp["$1"];
            browser.gecko = parseFloat(engine.ver);

            // 确定是否是firefox
            if (/Firefox\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.firefox = parseFloat(browser.ver);
            }
        } else if (/MSIE ([^;]+)/.test(ua)) {
            engine.ver = browser.ver = RegExp["$1"];
            engine.ie = browser.ie = parseFloat(engine.ver);
        }

        // 微信检查
        if (/MicroMessenger\/([\d\.]+)/i.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.wx = 'micromessenger';

            browser.wxpc = /WindowsWechat/i.test(ua);
        }

        // 坚持浏览器
        browser.ie = engine.ie;
        browser.opera = engine.opera;

        // 检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") >= 0;
        system.mac = p.indexOf("Mac") >= 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

        // 检测 windows 操作版本
        if (system.win) {
            if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
                if (RegExp["$1"] == "NT") {
                    switch (RegExp["$2"]) {
                        case "5.0":
                            system.win = "2000";
                            break;
                        case  "5.1":
                            system.win = "XP";
                            break;
                        case "6.0":
                            system.win = "vista";
                            break;
                        case "6.1":
                            system.win = "7";
                            break;
                        default :
                            system.win = "NT";
                            break;
                    }
                } else if (RegExp["$1"] == "9x") {
                    system.win = "ME";
                } else {
                    system.win = RegExp["$1"];
                }
            }
        }

        // 检测移动设备
        system.iphone = ua.indexOf("iPhone") > -1;
        system.ipod = ua.indexOf("iPod") > -1;
        system.ipad = ua.indexOf("iPad") > -1;
        system.nokiaN = ua.indexOf("NokinaN") > -1;

        // windows mobile
        if (system.win == "CE") {
            system.winMobile = system.win;
        } else if (system.win == "Ph") {
            if (/Window Phone OS (\d+.\d+)/.test(ua)) {
                system.win = "Phone";
                system.winMobile = parseFloat(RegExp["$1"]);
            }
        }

        // 检测 iOS 版本
        if (system.iphone && ua.indexOf("Mobile") > -1) {
            if (/CPU (?:iPhone)?[ ]?OS (\d+_\d+)/.test(ua)) {
                system.ios = parseFloat(RegExp.$1.replace("_", "."));
            } else {
                system.ios = 2; // 不能真正检测出来，所以只能猜测
            }
        }

        // 检测 android 版本
        if (/Android (\d+\.\d+)/.test(ua)) {
            system.android = parseFloat(RegExp.$1);
        }

        // 游戏系统
        system.wii = ua.indexOf("Wii") > -1;
        system.ps = /playstation/i.test(ua);

        // 返回对象
        return {
            engine: engine,
            browser: browser,
            system: system
        }
    })();
    app.provider('WuBrowserChecker', [function () {
        var self = this;
        self.$get = [function () {
            return window.weui_client_browser_checker;
        }]
    }]);

    app.provider('IdWorkerFactory',[function () {
        var factories = {};
        this.new = function IdWorkerFactory(prefix) {
            if(!factories.hasOwnProperty(prefix)) {
                factories[prefix] = (function (p) {
                    var count = 0;
                    return function () {
                        return p+'_'+(count++);
                    }
                })(prefix);
            }
            return factories[prefix];
        };

        this.$get = [function() {
            return this;
        }]
    }])

})(angular.module('ng.weui.core'), window);

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
})(angular.module('ng.weui.button'));

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
})(angular.module('ng.weui.actionsheet'));
