
'use strict';
angular.module('weui.core',[]);

/**
 * 企业号/服务号jssdk封装
 */
angular.module('weui.jssdk',[]);

angular.module('weui.button',[]);
angular.module('weui.progress',[]);
angular.module('weui.dialog',['weui.core']);
angular.module('weui.actionsheet',['weui.core']);
angular.module('weui.toast',['weui.core']);
angular.module('weui.form',['weui.core']);
angular.module('weui',[
    'weui.core',
    'weui.button',
    'weui.actionsheet',
    'weui.dialog',
    'weui.toast',
    'weui.form',
    'weui.progress'
]);
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

})(angular.module('weui.jssdk'), window);
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
})(angular.module('weui.toast'));
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
})(angular.module('weui.form'));
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

                        //prepare an instance of a modal to be injected into controllers and returned to a caller
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
                        // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
                        // Then add to $modalStack and resolve opened.
                        // Finally clean up the chain variable if no subsequent modal has overwritten it.
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

})(angular.module('weui.core'), window);
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
                    var mask = element.find('.weui_mask_transition');
                    var actionSheet = element.find('.weui_actionsheet');

                    /**
                     * 打开初始化
                     */
                    (function () {
                        mask.show().addClass('weui_fade_toggle').on('click',function () {
                            closeActionSheetAnimate(actionSheet, mask).then(function () {
                                scope.$dismiss('mask:click');
                            })
                        });
                        actionSheet.addClass('weui_actionsheet_toggle');
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
                            actionSheet.removeClass('weui_actionsheet_toggle');
                            mask.removeClass('weui_fade_toggle');
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